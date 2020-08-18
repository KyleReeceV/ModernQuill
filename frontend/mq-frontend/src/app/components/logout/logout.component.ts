import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router, private loginService:LoginService) { }

  ngOnInit(): void {

    localStorage.clear();
    this.router.navigateByUrl("/login");

    this.loginService.logoutCustomer();
  }

}
