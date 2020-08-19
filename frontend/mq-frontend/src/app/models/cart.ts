import { Pen } from './pen';
export class Cart{
    cartId:number;
    cId : number;
    pId : number;
    quantity: number;
    pen:Pen;
    constructor(cartId: number, cId: number, pId:number, quantity: number, pen:Pen){
        this.cartId = cartId;
        this.cId =  cId;
        this.pId = pId;
        this.quantity=quantity;
        this.pen=pen;
    }
}