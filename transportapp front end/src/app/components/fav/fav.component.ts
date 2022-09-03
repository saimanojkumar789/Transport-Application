import { Component, OnInit } from '@angular/core';
import { Favourite } from 'src/app/model/favorite';
import { LoginapiService } from 'src/app/services/loginapi.service';

@Component({
  selector: 'app-fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  fav:Favourite;
  source:string;
  destinaton:string;
  myFavourites:any[];
  // source: string;
  // destination: string;
  constructor(private favapi:LoginapiService) { }

  ngOnInit(): void {
    this.getAllFavourites();
  }

  public getAllFavourites(){
    this.favapi.getFavourite().subscribe((data:any[])=>{
      console.log(data);
      
      this.myFavourites=data;

    })
  }

  // public deleteFav(source:string,destination:string) {
  //   // localStorage.getItem(id)
  //   this.fav = new Favourite(this.source,localStorage.getItem("email"),this.destinaton);
  //   this.favapi.deleteFavourite(this.fav).subscribe((data: any) => {
  //     this.myFavourites=data;
  //   }
  //     ,
  //     error=>{
  //       console.log("Error")
  //       alert("Your wishlist is empty!!");
  //   }
  //   );
  // }
  
}
