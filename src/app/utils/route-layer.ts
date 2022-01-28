import * as L from 'leaflet';
import { Circle, LatLng, Polygon } from 'leaflet';

export class RouteLayer {

  private circles: Circle[] = [];
  private polygon: Polygon;
  private latLng: LatLng[];
  public isShown = false;


  constructor(public id: number, public name: string, private lmap: L.Map) {

  }

  public setLatLng(latLng: LatLng[]): RouteLayer {
    this.remove();
    this.circles.length = 0
    this.latLng = latLng;
    this.setCircles();
    this.setPolygon();
    return this;
  }


  public draw(): RouteLayer {
    if (this.isShown) {
      return this;
    }
    this.polygon.addTo(this.lmap);
    this.circles.forEach(c => {
      c.addTo(this.lmap);
    });
    this.isShown = true;
    return this;
  }

  public highlight(): void {
    this.polygon.setStyle({
      opacity: 1,
    });
    const latMin = Math.min(...this.latLng.map(ll => ll.lat));
    const latMax = Math.max(...this.latLng.map(ll => ll.lat));
    const lngMax = Math.max(...this.latLng.map(ll => ll.lng));
    const lngMin = Math.min(...this.latLng.map(ll => ll.lng));
    const b = L.latLngBounds([
      [latMin, lngMin],
      [latMax, lngMax]
    ]);
    this.lmap.fitBounds(b);
  }

  public deHighlight(): void {
    this.polygon.setStyle({
      opacity: 0.2,
    });
  }


  public remove(): RouteLayer {
    if (!this.isShown) {
      return this;
    }
    this.circles.forEach(c => {
      this.lmap.removeLayer(c);
    });
    if (this.polygon) {
      this.lmap.removeLayer(this.polygon);
    }
    this.isShown = false;
    return this;
  }

  private setCircles(): RouteLayer {
    this.latLng.forEach(_latLng => {
      this.circles.push(this.getCircle(_latLng));
    });
    return this;
  }


  private setPolygon(): RouteLayer {
    this.polygon = L.polygon([
      ...this.latLng
    ], {
      color: 'red',
      opacity: 0.2,
      fillColor: '#f03',
      fillOpacity: 0.02,
    });
    return this;
  }

  private getCircle(latLng): Circle {
    return L.circle(latLng, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.2,
      radius: 1000
    });
  }


}
