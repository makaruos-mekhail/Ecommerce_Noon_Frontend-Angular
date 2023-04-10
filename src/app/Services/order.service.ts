import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrderItem } from '../Models/iorder-item';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IOrder } from '../Models/iorder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  httpHeader = {};
  constructor(private httpClient: HttpClient) {
    this.httpHeader = {
      header: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
// https://localhost:7006/api/Order/AddOrder
  sendOrder(order: IOrder): Observable<IOrder> {
    return this.httpClient.post<IOrder>(`${environment.APIURLProduct}/Order/AddOrder`,order);
  }
}
