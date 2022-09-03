import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginapiService } from 'src/app/services/loginapi.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn=false;
  public user="";
  constructor(private loginservice:LoginapiService,private router:Router) { }
  
  ngOnInit(): void {
    this.loggedIn = this.loginservice.isLoggedIn();
    this.user =localStorage.getItem('username');
  }
  public logOutUser(){
    this.loginservice.logout();
    this.router.navigate(['login']);
    this.ngOnInit();
  }
  
}
