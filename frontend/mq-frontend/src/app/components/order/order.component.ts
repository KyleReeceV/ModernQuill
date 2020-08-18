import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CartService } from 'src/app/services/cart.service';
import { DatePipe } from '@angular/common';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/order.service';

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
    @Inject(MAT_DIALOG_DATA) public data:any ) { }

  ngOnInit(): void {
  }


  
  async placeOrder() {
    let date: string = this.datePipe.transform(new Date(), 'yyyy-MM-dd hh-mm-ss');
    let cartID = this.data.cartId;
    let custID = this.data.custId;

    const returnedOrder:Order = await this.orderService.createOrder(new Order(0, cartID, custID, date));

    
    console.log(returnedOrder);

  }

}
