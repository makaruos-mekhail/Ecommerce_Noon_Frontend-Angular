import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  httpHeader = {};


  constructor(private httpClient: HttpClient) {
    this.httpHeader = {
      header: new HttpHeaders({
        'Content-Type': 'application/json'

      })
    };
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.APIURLProduct}/Product`);
  }
  getProductById(prdId: number): Observable<IProduct | undefined> {
    return this.getAllProducts()
      .pipe(
        map((products: IProduct[]) => products.find(p => p.id === prdId))
      );
  }
}
