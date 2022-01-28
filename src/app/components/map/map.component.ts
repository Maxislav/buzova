import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { IRoute } from '../../interface/route.interface';
import { ReplaySubject } from 'rxjs';
import { IPoint } from '../../interface/turn-point.interface';
import { MapStore } from './map.store';
import { take } from 'rxjs/operators';

@Component({
  selector: 'bzv-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less'],
  providers: [MapStore]
})
export class MapComponent implements OnInit, AfterViewInit {
  private viewInit$ = new ReplaySubject(1);
  private map;
  initialRouteList: IRoute[] = [
    {
      name: 'Андреевка Осовцы',
      points: [
        {
          name: 'Buzove',
          latLng: [50.3977, 30.0569]
        },
        {
          name: 'Andreevka',
          latLng: [50.5523, 29.8280]
        },
        {
          name: 'Osovsi',
          latLng: [50.3335, 29.4717]
        }
      ],
    }
  ];

  @Input() set routeList(list: IRoute[]) {
    this.store.updateRouteList(list);
  }

  constructor(private elementRef: ElementRef, private store: MapStore) {
  }

  ngOnInit(): void {

    this.store.updateRouteList(this.initialRouteList);

    this.store.lmap$
      .pipe(take(1))
      .subscribe(map => {

      })

  }


  private drawPoint(): void {
    const circle = L.circle([51.508, -0.11], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(this.map);
  }

  private drawRoute(points: IPoint[]): void {

  }

  ngAfterViewInit(): void {
    // this.map = L.map(this.elementRef.nativeElement).setView([50.4113, 30.0456], 10);
    this.store.mapInit(this.elementRef.nativeElement);
  }

}
