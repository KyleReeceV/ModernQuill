import { Component, OnInit } from '@angular/core';
import {Order} from '../../models/Order';
import {OrderService} from '../../services/order.service';
import { Customer } from 'src/app/models/customer';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  constructor(private os: OrderService, private loginService:LoginService,) { }

  curCustomer:Customer;

  async ngOnInit(): Promise<void> {
    this.getCustomerOrders((await this.getCustomerById()).cId);
    this.curCustomer = await this.getCustomerById();
    console.log(this.curCustomer)
  }

  orders:Array<Order>;

  async getCustomerById():Promise<Customer> {
    let str = localStorage.getItem('customer')
    let num = parseInt(str);
    let curCustomer = await this.loginService.getCustomerById(num);
    return curCustomer;
  }

  async getCustomerOrders(cust:number): Promise<void>{
    this.orders  = await this.os.getAllOrdersByCustomerId(cust);
    console.log(this.orders);
  }

}
