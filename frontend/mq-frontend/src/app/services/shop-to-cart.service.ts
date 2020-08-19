import { Injectable } from '@angular/core';
import {Cart} from 'src/app/models/cart'
@Injectable({
  providedIn: 'root'
})

export class ShopToCartService {

  courier: Array<Cart> = [];

  constructor() { }
}
