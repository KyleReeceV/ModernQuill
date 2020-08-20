import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pen } from 'src/app/models/pen'


@Injectable({
  providedIn: 'root'
})
export class PenService {

  constructor(private http:HttpClient) { }

  // async getAllPens():Promise<Array<Pen>> {
  //   const pens:Array<Pen> = await this.http.get<Array<Pen>>(`http://ec2-3-91-229-143.compute-1.amazonaws.com:8080/pens/`).toPromise();
  //   return pens;
  // }
  
  async getAllPensSort(ascending:boolean):Promise<Array<Pen>> {
    const pens:Array<Pen> = await this.http.get<Array<Pen>>(`http://localhost:8080/pens?ascending=${ascending}`).toPromise();
    return pens;
  }

  async getAllPens():Promise<Array<Pen>>{
    const pens:Array<Pen> = await this.http.get<Array<Pen>>(`http://localhost:8080/pens`).toPromise();
    return pens;
  }

  // async getPenById(id:number):Promise<Pen> {
  //   const pen:Pen = await this.http.get<Pen>(`http://ec2-3-91-229-143.compute-1.amazonaws.com:8080/pens/${id}`).toPromise();
  //   return pen;
  // }

  async getPenById(id:number):Promise<Pen> {
    const pen:Pen = await this.http.get<Pen>(`http://localhost:8080/pens/${id}`).toPromise();
    return pen;
  }

}
