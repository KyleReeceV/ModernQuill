import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart'
import { CartService } from 'src/app/services/cart.service'
import { PenService } from '../../services/pen.service';
import { Pen } from '../../models/pen'
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { OrderComponent } from 'src/app/components/order/order.component';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  constructor(private cartService:CartService, 
              private penService:PenService,
              private router:Router,
              private loginService:LoginService,
              private matDialog:MatDialog) { }

  ngOnInit(): void {
    this.getCurCartID();
    this.getAllCartItemsByCartId();
    this.custLoggedIn();
  }

  carts:Array<Cart> = [];
  cart:Cart;
  pen:Pen;

  pens:Array<Pen> = []; 

  cartId:number;
  customerId:number;
  penId:number = 0;

  totalCost:number;

  async getCurCartID() {
    let curCartID = await this.cartService.getLastElementId() + 1;
    localStorage.setItem('nCartID', String(curCartID));
    console.log(localStorage.getItem('nCartID'));

  }

  async getAllCartItemsByCartId(): Promise<void>{
    let cartID = parseInt(localStorage.getItem('nCartID'));
    const returnedCarts: Array<Cart> = await this.cartService.getAllCartsByCartId(cartID);    
    let cost:number = 0;

    for(let i = 0; i < returnedCarts.length; i++) {
      this.pen = await this.penService.getPenById(returnedCarts[i].pId);
      returnedCarts[i].pen = this.pen;
      this.carts = returnedCarts;
      cost += (this.pen.cost * this.carts[i].quantity);
    }
    this.totalCost = cost;
  }

  custLoggedIn(){
    if(!this.loginService.isLoggedIn()) {
      alert("You must be logged in to view this page!");
      this.router.navigateByUrl("/login");
    }
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {cost: this.totalCost, cartId: parseInt(localStorage.getItem('nCartID')), custId: 1};
    this.matDialog.open(OrderComponent, dialogConfig);
  }
}
