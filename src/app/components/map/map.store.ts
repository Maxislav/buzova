import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { IRoute } from '../../interface/route.interface';
import * as L from 'leaflet';
import { concatMap, filter, flatMap, map, mergeMap, switchMap, take, tap, withLatestFrom } from 'rxjs/operators';
import { combineLatest, Observable, of, pipe } from 'rxjs';
import { circle, Circle, LatLng, Polygon } from 'leaflet';
import { RouteLayer } from '../../utils/route-layer';

// import L from ''

interface MapState {
  activeRouteId: number;
  routes: IRoute[];
  lmap: L.Map;
  selected: number[];
}

const defaultState: MapState = {
  activeRouteId: -1,
  routes: [],
  lmap: null,
  selected: []
};

@Injectable()
export class MapStore extends ComponentStore<MapState> {

  private readonly routes: RouteLayer[] = [];

  constructor() {
    super(defaultState);
    this.activeRouteId$
      .subscribe(d => {
        this.routes
          .forEach(route => {
            if (route.id === d) {
              route.highlight();
            } else {
              route.deHighlight();
            }
          });
      });

    this.selected$
      .subscribe(selected => {
        this.routes.forEach(r => {
          if (selected.includes(r.id)) {
            r.draw();
          }else {
            r.remove();
          }
        });
        //console.log(d);
      });
  }

  updateRoutes = this.updater((state, routes: IRoute[]) => {
    return {
      ...state,
      routes
    };
  });

  readonly lmap$ = this.select(({ lmap }) => {
    return lmap;
  }).pipe(filter(Boolean));

  readonly routes$ = this.select(({ routes }) => routes);
  readonly selected$ = this.select(({ selected }) => selected);


  readonly mapInit = this.updater((state, el: HTMLElement) => {
    const lmap = L.map(el).setView([50.4113, 29.9358], 10);
    const tileLayer = L.tileLayer('https://c.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery ©',
      maxZoom: 18,
      tileSize: 256
    });
    tileLayer.addTo(lmap);
    return {
      ...state,
      lmap,
    };
  });

  readonly onHoverRoute = this.updater((store, id: number) => {
    return {
      ...store,
      activeRouteId: id
    };
  });

  readonly setChecked = this.updater((state, params: { id: number; checked: boolean }) => {
    const selected = [...state.selected];
    const i = selected.indexOf(params.id);
    if (params.checked) {
      if (!selected.includes(params.id)) {
        selected.push(params.id);
      }

    } else if (-1 < i) {
      selected.splice(i, 1);
    }

    // routes.find(it => it.id === params.id).checked = params.checked;
    return {
      ...state,
      selected
    };
  });

  activeRouteId$ = this.select(({ activeRouteId }) => activeRouteId);


  readonly updateRouteList = this.effect((routes$: Observable<IRoute[]>) => {

    return combineLatest([routes$, this.lmap$])
      .pipe(map(([routes, lmap]: [IRoute[], L.Map]) => {
        lmap.zoomControl.setPosition('bottomright');
        return routes;
      }))
      .pipe(tap(() => {
        this.routes
          .forEach(r => r.remove());
      }))
      .pipe(map((routes) => {
        /// const _routes = [];
        routes.forEach(route => {
          const latLngList: LatLng[] = [];
          const routeLayer: RouteLayer = new RouteLayer(route.id, route.name, this.get().lmap);
          this.routes.push(routeLayer);
          route.points
            .forEach(p => {
              latLngList.push(new LatLng(p.latLng[0], p.latLng[1]));
            });
          routeLayer.setLatLng(latLngList).draw();
        });
        routes.map(r => {
          this.setChecked({ id: r.id, checked: true });
        });
        this.updateRoutes(routes);
        return
      }))
      .pipe(tap(() => {


      }))
  });


  isChecked$ = (id) => {
    return this.selected$
      .pipe(map((r) => {
        return r.includes(id);
      }));
  };

}
