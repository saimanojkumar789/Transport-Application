import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginapiService } from 'src/app/services/loginapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginuser:FormGroup;
  constructor(private formbuilder:FormBuilder,private loginapi:LoginapiService) { }

  ngOnInit(): void {
    this.loginuser=this.formbuilder.group({
      email: ['', [Validators.required , Validators.email]],
      password: ['', [Validators.required ]]
    });
  }

  login(){
    this.loginapi.login(this.loginuser.value).subscribe((data:any) =>{
      console.log(data);
      localStorage.setItem('token',data.token);
      localStorage.setItem('username',data.user.userName);
      localStorage.setItem('email',data.user.email);
      window.location.href='allroutes';
    },
    error=>{
      alert("Invalid Credential");
    }
    );

  }


}


//data-->user-->username,token,email
//emp-->salary,id,name

// data--> user--(username,email),token