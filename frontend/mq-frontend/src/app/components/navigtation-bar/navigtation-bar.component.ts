import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Customer} from '../../models/customer';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigtation-bar',
  templateUrl: './navigtation-bar.component.html',
  styleUrls: ['./navigtation-bar.component.css']
})
export class NavigtationBarComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router) { }

  customer:Customer;


  ngOnInit(): void {
    //this.custLoggedIn();
  }
  
  custLoggedIn():boolean {
    if(!this.loginService.isLoggedIn()) {
      return false;
    } else {
      this.customer = this.loginService.currCust;
      //console.log(this.customer);
      return true;
      
    }
  }
}