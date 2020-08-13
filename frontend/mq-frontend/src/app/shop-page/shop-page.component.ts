import { Component, OnInit } from '@angular/core';
import {Pen} from '../models/pen'

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pens:Array<Pen> = [];

  async displayPens():Promise<void>{
      // this.pens = await this.penService.getAllPens();
  };

}
