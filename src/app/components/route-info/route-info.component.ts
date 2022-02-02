import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { MapStore } from '../map/map.store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'bzv-route-info',
  templateUrl: './route-info.component.html',
  styleUrls: ['./route-info.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteInfoComponent implements OnInit {
  @HostBinding('class') cssClass = 'bzv-route-info';
  routes$ = this.store.routes$;
  isShown = true;

  constructor(private store: MapStore) {
  }

  ngOnInit(): void {

  }

  onHover(id): void {
    this.store.onHoverRoute(id);
  }

  onValueChange(e, id: number): void {
    this.store.setChecked({
      id,
      checked: e.target.checked
    });
  }

  onItemClick(e, id: number): void {
    e.stopPropagation()
    this.store.isChecked$(id)
      .pipe(take(1))
      .subscribe((checked) => {
        this.store.setChecked({
          id,
          checked: !checked
        });
      });
  }

  isChecked(id: number): Observable<boolean> {
    return this.store.isChecked$(id);
  }

  onShow(): void {
    this.isShown = !this.isShown;
  }

}
