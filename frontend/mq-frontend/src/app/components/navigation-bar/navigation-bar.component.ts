import { Component, OnInit } from '@angular/core';
import {Customer} from '../../models/customer';
import {LoginService} from '../../services/login.service';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  customer:Customer;

  ngOnInit(): void {
    this.isLoggedIn();
  }
  
  isLoggedIn():boolean{
    this.customer = this.loginService.currCust;

    console.log(this.customer);
    if(this.customer === undefined){
      return false;
    }
    else{
      return true;
    }
  }

}
