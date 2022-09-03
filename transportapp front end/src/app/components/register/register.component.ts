import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registration } from 'src/app/model/registration';
import { LoginapiService } from 'src/app/services/loginapi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registeruser:FormGroup;
  constructor(private formbuilder:FormBuilder ,private loginapi:LoginapiService) {
    this.registeruser=this.formbuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['',[Validators.required]]
    });
   }

  ngOnInit(): void {
    
  }

  register(){
    this.loginapi.registration(this.registeruser.value).subscribe((data:Registration) => {
      alert("Registered Successfully !!");
      location.href="/login";
    },
    error => {
      console.log("error occured...");
      alert("This user already exists...");
    });
  }

}