import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { IRoute } from '../../interface/route.interface';
import * as L from 'leaflet';
import { concatMap, filter, flatMap, map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { combineLatest, Observable, of, pipe } from 'rxjs';
import { circle, Circle, LatLng, Polygon } from 'leaflet';
import { RouteLayer } from '../../utils/route-layer';

// import L from ''

interface MapState {
  activeRouteId: number;
  routes: RouteLayer[];
  lmap: L.Map;
}

const defaultState: MapState = {
  activeRouteId: -1,
  routes: [],
  lmap: null
};

@Injectable()
export class MapStore extends ComponentStore<MapState> {
  constructor() {
    super(defaultState);
  }

  viewInit = this.updater((state, viewInit: boolean) => {
    return {
      ...state,
      viewInit
    };
  });

  updateRoutes = this.updater((state, routes: RouteLayer[]) => {
    return {
      ...state,
      routes
    };
  });

  readonly lmap$ = this.select(({ lmap }) => {
    return lmap;
  }).pipe(filter(Boolean));

  readonly routes$ = this.select(({ routes }) => routes);

  readonly routeNames$ = this.routes$.pipe(map((routeLayers: RouteLayer[]) => routeLayers.map(r => r.name)))

  readonly mapInit = this.updater((state, el: HTMLElement) => {
    const lmap = L.map(el).setView([50.4113, 30.0456], 10);
    L.tileLayer('https://c.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 256,
    }).addTo(lmap);
    return {
      ...state,
      lmap,
    };
  });

  readonly updateRouteList = this.effect((routes$: Observable<IRoute[]>) => {
    return combineLatest([routes$, this.lmap$])
      .pipe(tap(() => {
        this.get().routes
          .forEach(r => r.remove());
      }))
      .pipe(map(([r]) => r))
      .pipe(map((routes) => {
        const _routes = [];
        routes.forEach(route => {
          const latLngList: LatLng[] = [];
          const routeLayer: RouteLayer = new RouteLayer(route.id, route.name, this.get().lmap);
          _routes.push(routeLayer);
          route.points
            .forEach(p => {
              latLngList.push(new LatLng(p.latLng[0], p.latLng[1]));
            });
          routeLayer.setLatLng(latLngList).draw();
        });
        this.updateRoutes(_routes);
        return true;
      }));
  });

  readonly routesById$ = (id) => {
    return this.routes$.pipe(map((r) => {
      return r.find(route => route.id === id);
    }));
  }
}
