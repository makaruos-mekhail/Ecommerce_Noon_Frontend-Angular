import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProductColor } from '../Models/iproduct-color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private httpclient: HttpClient) { }


  // Get All Colors 
  getAllColors(): Observable<IProductColor[]>{
    return this.httpclient.get<IProductColor[]>(`${environment.APIURLProduct}/ProductColor/Filter`)
  }

}
