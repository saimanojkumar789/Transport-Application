import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangePass } from '../model/changepass';
import { Favourite } from '../model/favorite';
import { Login } from '../model/login';
import { Registration } from '../model/registration';
import { Token } from '../model/token';

@Injectable({
  providedIn: 'root'
})
export class LoginapiService {
  private userapi="http://localhost:8084/userdetails";
  private favouriteapi="http://localhost:8056/favourites";
  constructor(private httpclient:HttpClient) { }

  public registration(data:Registration):Observable<Registration>{
    return this.httpclient.post<Registration>(`${this.userapi}/register`,data);
  }

  public login(data:Login):Observable<Token>{
    return this.httpclient.post<Token>(`${this.userapi}/login`,data);
  }

  public updatePassword(updatedpass:string){
    console.log(localStorage.getItem('email'));
    
    return this.httpclient.put(`${this.userapi}/updatepass/${localStorage.getItem('email')}`, updatedpass);
  }

  public updateUserName(updatedusername:string){
    console.log(localStorage.getItem('email'));
    
    return this.httpclient.put(`${this.userapi}/updateusername/${localStorage.getItem('email')}`, updatedusername);
  }


  public isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token == undefined || token === '' || token == null) {
      return false;
    } else {
      return true;
    }
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    return true;
  }

  public saveFavourite(fav:Favourite){
    console.log(fav);
    
    return this.httpclient.post<Favourite>(`${this.favouriteapi}/favorite`,fav);
    

  }

  public getFavourite(){
    return this.httpclient.get<Favourite[]>(`${this.favouriteapi}/${localStorage.getItem('email')}`);

  }
  // public deleteFavourite(favd:any){
  //   return this.httpclient.delete<any>(`${this.favouriteapi}/delete/fav`,favd);
  // }
}
