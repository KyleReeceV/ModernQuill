import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  // async createBook(book:Book):Promise<Book>{
  //   // second parameter is the body
  //   // it takes in an object it will automatically 
  //   // turn it into a json when sent
  //   book = await this.http.post<Book>("http://localhost:7000/books",book).toPromise();
  //   return book;
  // }

}