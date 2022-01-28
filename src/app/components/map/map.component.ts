import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'bzv-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    console.log(this.elementRef);

  }

  ngAfterViewInit(): void {
    const map = L.map(this.elementRef.nativeElement).setView([50.4113, 30.0456], 10);
    L.tileLayer('https://c.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 256,
    }).addTo(map);

    const myIcon = L.icon({
      iconUrl: 'my-icon.png',
      iconSize: [50, 50],
      iconAnchor: [0, 0],
      popupAnchor: [-3, -76],
    });

    const createIcon = () => {
      const img = new Image();
      img.width = 50
      img.height = 50
      let canvas = document.createElement('canvas');
      canvas.width = 50;
      canvas.height = 50;
      let ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath()
      ctx.arc(25, 25, 25, 0, 2 * Math.PI, false)
      ctx.fillStyle = 'red'
      ctx.fill();
      // ctx.drawImage(img, 0, 0, 50, 50);
      img.src = canvas.toDataURL()
      return img;
    };
    const dd =  L.divIcon( {
      html: createIcon(),
      iconAnchor: [25, 25],
      iconSize: [50, 50],
    })

    L.marker([50.4113, 30.0456], {
      icon: dd
    }).addTo(map);

  }

}
