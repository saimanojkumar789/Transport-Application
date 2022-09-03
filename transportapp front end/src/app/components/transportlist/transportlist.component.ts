import { Component, OnInit } from '@angular/core';
import { Coordinate } from 'src/app/model/coordinate';
import { Favourite } from 'src/app/model/favorite';
import { Transport } from 'src/app/model/transport';
import { LoginapiService } from 'src/app/services/loginapi.service';
import { TransportapiService } from 'src/app/services/transportapi.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-transportlist',
  templateUrl: './transportlist.component.html',
  styleUrls: ['./transportlist.component.css']
})
export class TransportlistComponent implements OnInit {

  allRoutes: any[];
  fav:Favourite;
  souLng: any;
  souLat: any;
  destiLng: any;
  destiLat: any;
  sourcesearch: string;
  destinationsearch: string;


  constructor(private trApi: TransportapiService, private favapi:LoginapiService) { }

  ngOnInit(): void {
    console.log(this.allRoutes);
  }

  public gettingCoordinates(source: any, destination: any) {
    this.trApi.setSourceAndDestination(source, destination);
    console.log(source);
    console.log(destination);
    this.getSourceCoordinates();
    this.getDestinationCoordinates();
  }

  public getSourceCoordinates() {
    this.trApi.getSourceCoordinate().subscribe((data: Coordinate) => {
      console.log(data);
      this.souLat = data.member[0].latitude;
      this.souLng = data.member[0].longitude;

      localStorage.setItem('soulat',this.souLat);
      localStorage.setItem('soulng',this.souLng);
      console.log(this.souLat);
      console.log(this.souLng);
  });
  }

  public getDestinationCoordinates() {
    this.trApi.getDestinationCoordinate().subscribe((data: Coordinate) => {
      console.log(data);
      this.destiLat = data.member[0].latitude;
      this.destiLng = data.member[0].longitude;
      localStorage.setItem('destilat',this.destiLat);
      localStorage.setItem('destilng',this.destiLng);

      console.log(this.destiLat);
      console.log(this.destiLng);

      
      this.getAllRoutes();
    });
  }

  public getAllRoutes() {
    this.trApi.getRoutes().subscribe((data:any) => {
      console.log(data);      
      this.allRoutes = data.routes;
    });
    
  }
  public makeFav() {
    if (this.sourcesearch === this.destinationsearch) {
      alert('Invalid Inputs')
    } else {
      this.fav = new Favourite(this.sourcesearch, localStorage.getItem("email"), this.destinationsearch);
      console.log(this.fav);

      this.favapi.saveFavourite(this.fav).subscribe((data: any) => {
        console.log(data);
        if(data.id === null){
          alert('Already Exists');
        }else{
          alert('Saved');
        }
        
      });
    }

  }

  

  

}
