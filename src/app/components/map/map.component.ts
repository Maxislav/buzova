import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IRoute } from '../../interface/route.interface';
import { MapStore } from './map.store';
import routes from '../../routes.json';
import flightAreaData from '../../flight-area.json';

@Component({
  selector: 'bzv-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less'],
  providers: [MapStore]
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('map', { read: ElementRef }) map;


  @Input() set routeList(list: IRoute[]) {
    this.store.initRouteList(list);
  }

  @Input() set flightArea(data){
    this.store.initFlightArea(data)
  }

  constructor(public store: MapStore) {
  }

  ngOnInit(): void {
    this.routeList = routes as IRoute[];

    this.flightArea = flightAreaData


  }

  ngAfterViewInit(): void {
    this.store.mapInit(this.map.nativeElement);
  }

}
