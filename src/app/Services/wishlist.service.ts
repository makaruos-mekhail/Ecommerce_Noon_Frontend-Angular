import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { environment } from 'src/environments/environment.development';
import { map, Observable } from 'rxjs';
import { Wishlitproduct } from '../Models/wishlitproduct';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private httpclient:HttpClient) { }
  getallproductinwishlist(useremail:string): Observable<IProduct[]> 
  {
    return this.httpclient.get<IProduct[]>(`${environment.APIURLProduct}/Wishlist/GetAll?userEmail=${useremail}`);

  }

  addproducttowishlist(wishlistpro:Wishlitproduct): Observable<Wishlitproduct> 
  {
    return this.httpclient.post<Wishlitproduct>(`${environment.APIURLProduct}/Wishlist/AddProductToWishList`,wishlistpro);

  }

  deleteproducttowishlist(useremail: string, productid:number): Observable<any> 
  {
    return this.httpclient.delete(`${environment.APIURLProduct}/Wishlist/DeleteProductFromWishList?useremail=${useremail}&productid=${productid}`);

  }
}
