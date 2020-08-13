import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pen } from 'src/app/models/pen'


@Injectable({
  providedIn: 'root'
})
export class PenService {

  constructor(private http:HttpClient) { }

  async getAllPens():Promise<Array<Pen>> {
    const pens:Array<Pen> = await this.http.get<Array<Pen>>(`http://localhost:8080/pens/`).toPromise();
    return pens;
  }
}
