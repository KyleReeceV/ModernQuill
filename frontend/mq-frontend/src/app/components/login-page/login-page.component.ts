import { Component, OnInit} from '@angular/core';
import {LoginService} from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({

  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router) { }

  userField:string;
  passField:string;

  //popup field for ngIf
  showPopUp: boolean=false;

  ngOnInit(): void {
  }

  async loginCust(){
    let dto = {email: this.userField, password: this.passField};
    console.log(dto);
    let customer = await this.loginService.loginUser(dto);
    console.log(customer)
    if (customer === null){
      //window.confirm("user not found");
      this.showPopUp=true;
      this.userField="";
      this.passField="";
      //this.router.navigateByUrl("/login");
      
    }
    else{
      this.router.navigateByUrl("/shop");
      this.loginService.setCustomer(customer);
    }

  }

  closePopUp():void{
    this.showPopUp=false;
  }

}
