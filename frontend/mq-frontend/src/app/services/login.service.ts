import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  currCust:Customer;

  async loginUser(dto):Promise<Customer>{
    const cust:Customer = await this.http.post<Customer>("http://localhost:8080/login",dto).toPromise();
    return cust;
  }

  setCustomer(customer:Customer): void {
      this.currCust = customer;
      localStorage.setItem('customer', String(this.currCust.cId));
  }

  async getCustomerById(id:number):Promise<Customer> {
    const c:Customer = await this.http.get<Customer>(`http://localhost:8080/customers/${id}`).toPromise();
    return c;
  }

  async updateCustomer(customer:Customer):Promise<Customer> {
    const c:Customer = await this.http.put<Customer>(`http://localhost:8080/customers/`, customer).toPromise();
    this.currCust = c;
    return c;
  }

  logoutCustomer() {
    this.currCust = null;
    return this.currCust;
  }

  isLoggedIn():boolean{
    if(this.currCust === undefined || this.currCust === null) {
      return false;
    } else {
      return true;
    }
  }
}
