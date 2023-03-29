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


   // Get All products
  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.APIURLProduct}/Product`);
  }

  //Filter Products By ID => ( page Details )
  
  getProductById(prdId: number): Observable<IProduct | undefined> {
    // return this.getAllProducts().pipe(
    //     map((products: IProduct[]) => products.find(p => p.id === prdId))
    //   );
    return this.httpClient.get<IProduct>(`${environment.APIURLProduct}/Product/${prdId}`)
  }

  // Filter By name  search By name Product
  filterproductbyName(name:any):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.APIURLProduct}/Product?name=${name}`)
  }

  // Filter By FromPrice & ToPrice By Product
  getbyprice(fromprice:number,toprice:number):Observable<IProduct[]>
  {
   return this.httpClient.get<IProduct[]>(`${environment.APIURLProduct}/Product?fromPrice=${fromprice}&toPrice=${toprice}`)
  }


}
