import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { MapComponent } from './components/map/map.component';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';
import { RouteInfoComponent } from './components/route-info/route-info.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [
    MapComponent,
    RouteInfoComponent
  ],
  providers: [],
})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(MapComponent, { injector });
    customElements.define('buzova-routes', custom);
  }
  ngDoBootstrap(args: any[]): any{

  }
}
