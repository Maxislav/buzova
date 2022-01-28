import * as L from 'leaflet';
import { Circle, LatLng, Polygon } from 'leaflet';

export class RouteLayer {

  private circles: Circle[] = [];
  private polygon: Polygon;
  private latLng: LatLng[];


  constructor(public id: number,  public name: string, private lmap: L.Map) {

  }

  public setLatLng(latLng: LatLng[]): RouteLayer {
    this.remove();
    this.latLng = latLng;
    this.setCircles();
    this.setPolygon();
    return this;
  }

  public draw(): RouteLayer {
    this.polygon.addTo(this.lmap);
    this.circles.forEach(c => {
      c.addTo(this.lmap);
    });
    return this;
  }

  public remove(): RouteLayer {
    this.circles.forEach(c => {
      this.lmap.removeLayer(c);
    });
    if (this.polygon) {
      this.lmap.removeLayer(this.polygon);
    }

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
      radius: 500
    });
  }


}
