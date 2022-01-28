import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { MapComponent } from './components/map/map.component';
import { createCustomElement } from '@angular/elements';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [
    MapComponent
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
