import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  httpHeader = {};
  constructor(private httpClient : HttpClient) {
    this.httpHeader = {
      header: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
   }
   
  //  get all cart items   // https://localhost:7006/api/Product/getproductsbyides?ids=1&ids=2&ids=3
   getCartItems(ids : number[]): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${environment.APIURLProduct}/Product/getproductsbyides?${ids.map((id) => `ids=${id}`).join('&')}`);
   }


}
