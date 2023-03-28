import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoyService {

  constructor(private httpclient: HttpClient) { }
  getAllCategories(): Observable<ICategory[]> {
    return this.httpclient.get<ICategory[]>(`${environment.APIURLProduct}/Category/Filter`);
  }
}
