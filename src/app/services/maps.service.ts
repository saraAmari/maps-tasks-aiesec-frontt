import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Haversine} from '../models/Haversine';
import {Direction} from '../models/Direction';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) {
  }

  getDirection(fromLat, fromLong, toLat, toLong) {
    return this.http.get<Direction>(environment.API_URL + 'api/direction/getGoogleDirections?fromLat='
      + fromLat + '&fromLong=' + fromLong + '&toLat=' + toLat + '&toLong=' + toLong);
  }


  getHaversineDistance(fromLat, fromLong, toLat, toLong) {
    return this.http.get<Haversine>(environment.API_URL + 'api/direction/getDistance?fromLat='
      + fromLat + '&fromLong=' + fromLong + '&toLat=' + toLat + '&toLong=' + toLong);
  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }


}
