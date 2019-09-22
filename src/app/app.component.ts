import {Component, OnInit} from '@angular/core';
import {MapsService} from './services/maps.service';
import {Haversine} from './models/Haversine';
import {Direction} from './models/Direction';
import {Poly} from './models/Poly';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'maps-tasks';
  fromCoordinates: string;
  toCoordinates: string;
  currentLat: any;
  currentLng: any;
  haversineDistance: Haversine;
  direction: Direction;

  constructor(private mapsService: MapsService) {
  }


  ngOnInit() {
    this.haversineDistance = new Haversine();
    this.direction = new Direction(new Poly());
    this.mapsService.getPosition().then(pos => {
      this.currentLat = pos.lat;
      this.currentLng = pos.lng;
    });


  }

  calculateDistances() {
    const from = this.fromCoordinates.split(',');
    const to = this.toCoordinates.split(',');
    this.mapsService.getDirection(from[0], from[1], to[0], to[1]).subscribe(data => {
     
      this.direction = data;

    });
    this.mapsService.getHaversineDistance(from[0], from[1], to[0], to[1]).subscribe(data => {
     
      this.haversineDistance = data;
    });
  }
}
