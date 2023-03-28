import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBrand } from '../Models/ibrand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpclient: HttpClient) { }


  // Get All Brands
  getAllBrands():Observable<IBrand[]> {
    return this.httpclient.get<IBrand[]>(`${environment.APIURLProduct}/Brand/Filter`);
  }

}
