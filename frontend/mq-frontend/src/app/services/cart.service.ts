import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Cart} from 'src/app/models/cart'
@Injectable({
  providedIn: 'root'
})


export class CartService {

  constructor(private http:HttpClient) { }

  // async createAllCartItems (carts: Array<Cart>) : Promise<Array<Cart>>{

  //   const cartsReturned:Array<Cart> = await this.http.post<Array<Cart>>
  //             (`http://ec2-3-91-229-143.compute-1.amazonaws.com:8080/carts/`, carts).toPromise();
  //   return cartsReturned;
  // }

  // async getAllCartsByCartId (cartId: number): Promise <Array<Cart>>{
    
  //   const cartsReturned:Array<Cart> = await this.http.get<Array<Cart>>
  //   (`http://ec2-3-91-229-143.compute-1.amazonaws.com:8080/carts/${cartId}`).toPromise();
  //   return cartsReturned;

  // }

  // async getLastElementId(): Promise<number>{
  //   const lastCartId:number = await this.http.get<number>
  //   (`http://ec2-3-91-229-143.compute-1.amazonaws.com:8080/carts/last-element`).toPromise();

  //   return lastCartId;

  // }


  async createAllCartItems (carts: Array<Cart>) : Promise<Array<Cart>>{

    const cartsReturned:Array<Cart> = await this.http.post<Array<Cart>>
              (`http://localhost:8080/carts/`, carts).toPromise();
    return cartsReturned;
  }

  async getAllCartsByCartId (cartId: number): Promise <Array<Cart>>{
    
    const cartsReturned:Array<Cart> = await this.http.get<Array<Cart>>
    (`http://localhost:8080/carts/${cartId}`).toPromise();
    return cartsReturned;

  }

  async getLastElementId(): Promise<number>{
    const lastCartId:number = await this.http.get<number>
    (`http://localhost:8080/carts/last-element`).toPromise();

    return lastCartId;

  }



}
