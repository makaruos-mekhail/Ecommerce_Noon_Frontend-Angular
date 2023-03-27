import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  // httpHeader={};


  // constructor(private httpClient:HttpClient) {
  //   this.httpHeader={
  //     header:new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };
  // }

  // getAllProducts(): Observable<IProduct[]> {
  //   return this.httpClient.get<IProduct[]>(`${environment.APIURLProduct}/Product`);
  // }

















  // ProductList: IProduct[];

  // constructor() {
    // this.ProductList = [
    //   {
    //     id: 1,
    //     Name: 'IPhone 14 Pro',
    //     NameAr: '  ايفون 14 برو',
    //     Description : 'IPhone 14 Pro is the most popular product',
    //     DescriptionAr: '  ايفون 14 برو',
    //     Price: 45000,
    //     Sizes:'14 inch & 32 RAM',
    //     ImagePath :'https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGlwaG9uZSUyMDEyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    //     Rate: 3.1,
    //     ProductCategoryId: 1,
    //     BrandId: 1,
    //     CategoryID: 1,
    //     OrdersID: 1,
    //     WishListId: 1,
    //     ProductColorsID: 2,
    //     ProductImagesURL: ['https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGlwaG9uZSUyMDEyfGVufDB8fDB8fA%3D%3D&w=1000&q=80','https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGlwaG9uZSUyMDEyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'],
    //     ProductReviewID: 'Very Good'
    //   }
    // ];
  // }


}
