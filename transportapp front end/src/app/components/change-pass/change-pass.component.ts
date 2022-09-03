import { Component, OnInit } from '@angular/core';
import { ChangePass } from 'src/app/model/changepass';
import { LoginapiService } from 'src/app/services/loginapi.service';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.css']
})
export class ChangePassComponent implements OnInit {
  public updatedpass:string;
  public cPass:ChangePass;
  public updatedusername:string;
  constructor(private loginservice:LoginapiService) { }

  ngOnInit(): void {
  }
  public updatePassword(){
    console.log(this.updatedpass);
    // this.cPass.updatedPass=this.updatedpass;
    this.loginservice.updatePassword(this.updatedpass).subscribe(data=>{
      alert("Password changed succesfully!!");
    console.log(data);
    },
    error=>{
      alert("Something Went Wrong");
    }
    );

  }
  public updateUserName(){
    console.log(this.updatedusername);
    // this.cPass.updatedPass=this.updatedpass;
    this.loginservice.updateUserName(this.updatedusername).subscribe(data=>{
      alert("username changed succesfully!!");
    console.log(data);
    },
    error=>{
      alert("Something Went Wrong");
    }
    );

  }

}
