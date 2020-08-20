import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Pen } from '../../models/pen'
import { PenService } from 'src/app/services/pen.service';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';
import { ShopToCartService } from 'src/app/services/shop-to-cart.service'


@Component({
  selector: 'app-pen-dialog',
  templateUrl: './pen-dialog.component.html',
  styleUrls: ['./pen-dialog.component.css']
})
export class PenDialogComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<PenDialogComponent>,
    private penService:PenService,
    private cartService:CartService,
    private stc:ShopToCartService,
    @Inject(MAT_DIALOG_DATA) public data:any ) { }

  specificPen:Pen;
  penQuantity:number;  

  ngOnInit(): void {
    this.getPenDetails(this.data);
  }

  close() {
    this.dialogRef.close();
  }

  async getPenDetails(id:number) {
    const pen = await this.penService.getPenById(id);
    this.specificPen = pen;
  }

  async addPenToCart() {
    
    let strcId = localStorage.getItem('customer')
    let numcId = parseInt(strcId);

    let numCurCart =  await this.cartService.getLastElementId() + 1;

    if(this.penQuantity <= 0 || this.penQuantity === undefined) {
      this.penQuantity = 1;
    }
    console.log(1);
    this.stc.courier.push(new Cart(numCurCart, numcId, this.specificPen.pId, this.penQuantity, this.specificPen));
    console.log(2);
    window.confirm("pen is added to the cart");
    console.log(3);
  }




}
