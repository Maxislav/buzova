import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { MapStore } from '../map/map.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'bzv-route-info',
  templateUrl: './route-info.component.html',
  styleUrls: ['./route-info.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteInfoComponent implements OnInit {
  @HostBinding('class') cssClass = 'bzv-route-info';
  routes$ = this.store.routes$;

  constructor(private store: MapStore) {
  }

  ngOnInit(): void {

  }

  onHover(id): void {
    this.store.onHoverRoute(id);
  }

  onValueChange(e, id: number): void {
    console.log(e.target.checked);
    this.store.setChecked({
      id,
      checked: e.target.checked
    });

  }

  isChecked(id: number): Observable<boolean> {
    return this.store.isChecked$(id);
  }

}
