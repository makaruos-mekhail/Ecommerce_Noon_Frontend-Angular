import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IProduct } from '../Models/iproduct';
import { Filter } from '../Models/filter';

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
  lang = localStorage.getItem('lang');
  filter!: string;
   nerparam = new HttpParams();
  filterProducts(
    name?: string,
    category?: string,
    brand?: string,
    fromPrice?: number,
    toPrice?: number,
    colorName?: string
  ): Observable<IProduct[]> {
    let params = new HttpParams();
    if (name) {
       (this.lang == 'en')?
        params = params.set('name', name) :
        params = params.set('nameAr', name);
    }
    if (category) {
      (this.lang == 'en') ?
        params = params.set('category', category) :
        params = params.set('CategoryAr', category);
    }
    if (brand) {
      (this.lang == 'en') ?
        params = params.set('brand', brand) :
        params = params.set('brandAr', brand);
        
    }
    if (fromPrice) {
     params = params.set('fromPrice', fromPrice.toString());
    }
    if (toPrice) {
     params = params.set('toPrice', toPrice.toString());
    }
    if (colorName) {
      params = params.set('colorName', colorName);
    }
    
    return this.httpClient.get<IProduct[]>(`${environment.APIURLProduct}/Product`, {params });
  }
  




}
