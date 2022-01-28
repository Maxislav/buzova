import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { MapStore } from '../map/map.store';

@Component({
  selector: 'bzv-route-info',
  templateUrl: './route-info.component.html',
  styleUrls: ['./route-info.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteInfoComponent implements OnInit {
  @HostBinding('class') cssClass = 'bzv-route-info';
  routeNames$ = this.store.routeNames$;
  routes$ = this.store.routes$;

  constructor(private store: MapStore) { }

  ngOnInit(): void {
    this.routeNames$.subscribe(d => {
      console.log(d)
    })
  }

}
