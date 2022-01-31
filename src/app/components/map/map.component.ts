import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { IRoute } from '../../interface/route.interface';
import { ReplaySubject } from 'rxjs';
import { IPoint } from '../../interface/turn-point.interface';
import { MapStore } from './map.store';
import { take } from 'rxjs/operators';

import routes from '../../routes.json';
import flightAreaData from '../../flight-area.json';
import { statesData } from '../../fly-area';

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
