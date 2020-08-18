import { Injectable } from '@angular/core';
import {Cart} from '../models/cart'
@Injectable({
  providedIn: 'root'
})

export class ShopToCartService {

  courier : Array<Cart>;

  constructor() { }
}
