import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CartService } from 'src/app/services/cart.service';
import { DatePipe } from '@angular/common';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/order.service';
import { ShopToCartService } from 'src/app/services/shop-to-cart.service';
import { Cart } from 'src/app/models/cart';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<OrderComponent>,
    private datePipe: DatePipe,
    private orderService:OrderService,
    private stc:ShopToCartService,
    private cartService:CartService,
    private loginService:LoginService,
    @Inject(MAT_DIALOG_DATA) public data:any ) { }

  ngOnInit(): void {
  }


  
  async placeOrder() {
    let date: string = this.datePipe.transform(new Date(), 'yyyy-MM-dd hh-mm-ss');
    let cartID = await this.cartService.getLastElementId() + 1;
    let custID = this.data.custId;
    let orderTotal = this.data.cost;


    const courierCarts:Array<Cart> = this.stc.courier;
    console.log(courierCarts);

    if(courierCarts.length === 0) {
        alert("You have no items in your cart!");
      } else if(this.loginService.currCust.points < this.data.cost) {
        alert("You do not have sufficient points to purchase these pens!");
      } else {
        const carts:Array<Cart> = await this.cartService.createAllCartItems(courierCarts);
        console.log(carts);
    
        this.stc.courier = [];
        const returnedOrder:Order = await this.orderService.createOrder(new Order(0, cartID, custID, date, orderTotal));
        console.log(returnedOrder);    
      }

      
  }
}
