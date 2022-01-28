import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('map', {read: ElementRef}) map;
  initialRouteList: IRoute[] = [
    {
      name: 'Andreevka Osovcy 100км ',
      id: 1,
      points: [
        {
          name: 'Buzove',
          latLng: [50.39862, 30.06],
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
    },
    {
      name: 'Migalki Kocherov 134 km,',
      id: 2,
      points: [
        {

          name: '000Buzovakta',
          latLng: [50.39862, 30.06],
        },
        {
          name: '075Migalki',
          latLng: [50.66445, 29.54695],
        },
        {
          name: '049Kocherov',
          latLng: [50.36445, 29.345],
        }
      ]
    }
  ];

  @Input() set routeList(list: IRoute[]) {
    this.store.updateRouteList(list);
  }

  constructor(private store: MapStore) {
  }

  ngOnInit(): void {

    this.store.updateRouteList(this.initialRouteList);

    this.store.lmap$
      .pipe(take(1))
      .subscribe(map => {

      });

  }

  ngAfterViewInit(): void {
    this.store.mapInit(   this.map.nativeElement);
  }

}
