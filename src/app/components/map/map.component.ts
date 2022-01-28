import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { IRoute } from '../../interface/route.interface';
import { ReplaySubject } from 'rxjs';
import { IPoint } from '../../interface/turn-point.interface';
import { MapStore } from './map.store';
import { take } from 'rxjs/operators';

@Component({
  selector: 'bzv-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less'],
  providers: [MapStore]
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('map', { read: ElementRef }) map;
  initialRouteList: IRoute[] = [
    {
      name: 'Andreevka Osovcy 100км ',
      id: 1,
      points: [
        {
          name: 'Buzove',
          latLng: [50.39862, 30.06],
        },
        {
          name: 'Andreevka',
          latLng: [50.5523, 29.8280]
        },
        {
          name: 'Osovsi',
          latLng: [50.3335, 29.4717]
        }
      ],
    },
    {
      name: 'Migalki Kocherov 134 km,',
      id: 2,
      points: [
        {

          name: '000Buzovakta',
          latLng: [50.39862, 30.06],
        },
        {
          name: '075Migalki',
          latLng: [50.66445, 29.54695],
        },
        {
          name: '049Kocherov',
          latLng: [50.36445, 29.345],
        }
      ]
    },
    {
      name: 'Hluhiv Bilyi bereg 152 km',
      id: 3,
      points: [
        {

          name: 'Buzovakta',
          latLng: [50.39862, 30.06],
        },
        {
          name: 'Hluhiv',
          latLng: [50.53445, 29.19917],
        },
        {
          name: 'Bilyi Bereh',
          latLng: [50.76, 29.48195],
        }
      ]
    },

    {
      name: 'Nedashki2 Kocherov 202 km',
      id: 4,
      points: [
        {

          name: 'Buzovakta',
          latLng: [50.39862, 30.06],
        },
        {
          name: 'Nedashki2',
          latLng:[ 50.97112, 29.29388],
        },
        {
          name: 'Kocherov',
          latLng: [50.36445, 29.345],
        }
      ]
    },

    {
      name: 'Narodichi Luginy Bilyi Bereh 301 km km',
      id: 5,
      points: [
        {

          name: 'Buzovakta',
          latLng: [50.39862, 30.06],
        },
        {
          name: 'Narodichi',
          latLng: [51.20138, 29.06972],
        },
        {
          name: 'Luginy',
          latLng: [51.09305, 28.41945],
        }
      ]
    },

    {
      name: 'Obykhody Volodarsk Novezhyttia 302 km',
      id: 6,
      points: [
        {

          name: 'Buzovakta',
          latLng: [50.39862, 30.06],
        },
        {
          name: '164Obykhody',
          latLng: [51.01612, 28.97028],
        },
        {
          name: '133Volodarsk',
          latLng: [50.6075, 28.46667],
        },
        {
          name: '152Novezhyttia',
          latLng: [50.86, 29.395],
        }
      ]
    }
  ];

  @Input() set routeList(list: IRoute[]) {
    this.store.updateRouteList(list);
  }

  constructor(public store: MapStore) {
  }

  ngOnInit(): void {

    this.store.updateRouteList(this.initialRouteList);

    this.store.lmap$
      .pipe(take(1))
      .subscribe(map => {

      });

  }

  ngAfterViewInit(): void {
    this.store.mapInit(this.map.nativeElement);
  }

}
