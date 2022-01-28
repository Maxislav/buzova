import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { IRoute } from '../../interface/route.interface';
import * as L from 'leaflet';
import { concatMap, filter, flatMap, map, mergeMap, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { combineLatest, Observable, of, pipe } from 'rxjs';
import { circle, Circle, LatLng, Polygon } from 'leaflet';

// import L from ''

interface MapState {
  routes: IRoute[];
  circles: Circle[];
  polygons: Polygon[];
  viewInit: boolean;
  lmap: L.Map;
}

const defaultState: MapState = {
  routes: [],
  circles: [],
  polygons: [],
  viewInit: false,
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

  readonly lmap$ = this.select(({ lmap }) => {
    return lmap;
  }).pipe(filter(Boolean));

  readonly circles$ = this.select(({ circles }) => {
    return circles;
  });

  readonly setRoutes = this.updater((state, routes: IRoute[]) => {
    return {
      ...state,
      routes
    };
  });

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
  readonly setCircles = this.updater((state, circles: Circle[]) => {
    return {
      ...state,
      circles
    };
  });
  readonly setPolygons = this.updater((state, polygons: Polygon[]) => {
    return {
      ...state,
      polygons
    };
  });

  readonly updateRouteList = this.effect((routes$: Observable<IRoute[]>) => {

    return combineLatest([routes$, this.lmap$, ])
      .pipe(map(([r]) => r ))
      .pipe(map((routes) => {
        const cc: Circle[] = [];
        const pp: Polygon[] = [];
        routes.forEach((route: IRoute) => {
          route.points
            .forEach((p) => {
              const c = this.getCircle(p.latLng);
              cc.push(c);
            });
          const latLng: LatLng[] = [];
          route.points
            .forEach(p => {
              latLng.push(new LatLng(p.latLng[0], p.latLng[1]));
            });
          const polygon = this.getPolygon(latLng);
          pp.push(polygon);
        });
        const { circles, polygons, lmap } = this.get();
        [...circles, ...polygons]
          .forEach(c => {
            lmap.removeLayer(c);
          });

        [...cc, ...pp].forEach(c => {
          c.addTo(lmap);
        });
        this.setCircles(cc);
        this.setPolygons(pp);
        lmap
        return true;
      }));
  });

  private getCircle(latLng): Circle {
    return L.circle(latLng, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    });
  }

  private getPolygon(latLng: LatLng[]): Polygon {
    return L.polygon([
      ...latLng
    ], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.02,
    });
  }
}
