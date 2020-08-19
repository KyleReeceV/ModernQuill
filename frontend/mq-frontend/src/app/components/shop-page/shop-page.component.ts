import { Component, OnInit } from '@angular/core';
import { Pen } from '../../models/pen'
import { PenService } from 'src/app/services/pen.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PenDialogComponent } from 'src/app/components/pen-dialog/pen-dialog.component'
import { LoginService } from 'src/app/services/login.service';
import { Customer } from 'src/app/models/customer';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {

  selected;


  constructor(private matDialog:MatDialog,
              private penService:PenService, 
              private loginService:LoginService, 
              private cartService:CartService,
              private router:Router) { }

  ngOnInit(): void {
    this.custLoggedIn();
    this.displayPens();
    this.getCustomerById();
  }

  pens:Array<Pen> = [];

  curCustomer:Customer;

  async displayPens():Promise<void>{
    if(this.selected === "ascending"){
      this.pens = await this.penService.getAllPensSort(true);
    }
    else if(this.selected === "descending"){
      this.pens = await this.penService.getAllPensSort(false);
    }
    else{
      this.pens = await this.penService.getAllPens();
    }
  };

  openDialog(id:Number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = id;
    this.matDialog.open(PenDialogComponent, dialogConfig);
  }

  async getCustomerById() {
    let str = localStorage.getItem('customer')
    let num = parseInt(str);
    this.curCustomer = await this.loginService.getCustomerById(num);
  }

  custLoggedIn(){
    if(!this.loginService.isLoggedIn()) {
      //alert("You must be logged in to view this page!");
      this.router.navigateByUrl("/login");
    }
  }
}