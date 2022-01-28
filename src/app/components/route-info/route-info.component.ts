import { Component, HostBinding, OnInit } from '@angular/core';
import { MapStore } from '../map/map.store';

@Component({
  selector: 'bzv-route-info',
  templateUrl: './route-info.component.html',
  styleUrls: ['./route-info.component.less']
})
export class RouteInfoComponent implements OnInit {
  @HostBinding('class') cssClass = 'bzv-route-info';
  routeNames$ = this.store.routeNames$

  constructor(private store: MapStore) { }

  ngOnInit(): void {
    this.routeNames$.subscribe(d => {
      console.log(d)
    })
  }

}
