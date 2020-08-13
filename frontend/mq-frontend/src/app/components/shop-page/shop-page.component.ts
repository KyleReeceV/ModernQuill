import { Component, OnInit } from '@angular/core';
import { Pen } from '../../models/pen'
import { PenService } from 'src/app/services/pen.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {

  constructor(private penService:PenService) { }

  ngOnInit(): void {
    this.displayPens();
  }

  pens:Array<Pen> = [];

  async displayPens():Promise<void>{
      this.pens = await this.penService.getAllPens();
      console.log(".");
  };

}
