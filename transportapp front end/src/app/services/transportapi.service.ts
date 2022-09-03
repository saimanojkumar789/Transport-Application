import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransportapiService {

  source = ' ';
  destination = ' ';
  sourceLng: any;
  sourceLat: any;
  destinationLng: any;
  destinationLat: any;

  constructor(private http: HttpClient) { }

  public getSourceCoordinate() {
    return this.http.get(`https://transportapi.com/v3/uk/places.json?query=${this.source}&app_key=c798526e69b80623b4cdc6116f3ed3b9&app_id=2fc7145a`)
  }

  public getDestinationCoordinate() {
    return this.http.get(`https://transportapi.com/v3/uk/places.json?query=${this.destination}&app_key=c798526e69b80623b4cdc6116f3ed3b9&app_id=2fc7145a`)
  }

  public getRoutes() {
    this.sourceLng=localStorage.getItem('soulng');
    this.sourceLat=localStorage.getItem('soulat');
    this.destinationLng=localStorage.getItem('destilng');
    this.destinationLat=localStorage.getItem('destilat');

    console.log(this.sourceLat);
        
    
    return this.http.get(`https://transportapi.com/v3/uk/public_journey.json?from=lonlat:-${this.sourceLng},${this.sourceLat}&to=lonlat:-${this.destinationLng},${this.destinationLat}&modes=bus,train&app_key=c798526e69b80623b4cdc6116f3ed3b9&app_id=2fc7145a`)
  }

  public setSourceAndDestination(sou: string, desti: string) {
    this.source = sou;
    this.destination = desti;
  }
  public setSourceAndDestinationCoordinates(souLng: any, souLat: any, destiLng: any, destiLat: any) {
    this.sourceLng = souLng;
    this.sourceLat = souLat;
    this.destinationLng = destiLng;
    this.destinationLat = destiLat;

    console.log(this.sourceLat);
    console.log(this.sourceLng);
    console.log(this.destinationLat);
    console.log(this.destinationLng);
  }

  public setSourceCord(souLng: any, souLat: any){
    this.sourceLng = souLng;
    this.sourceLat = souLat;
    console.log(this.sourceLng);
  }

  public setDestinationCord(destiLng: any, destiLat: any){
    this.destinationLng = destiLng;
    this.destinationLat = destiLat;
    console.log(this.destinationLng);
  }
}
