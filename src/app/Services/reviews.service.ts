import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IReview } from '../Models/ireview';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private httpclient: HttpClient) {
    
  }
  getReviewsByProductId(prdId: number): Observable<IReview[]>{
    return this.httpclient.get<IReview[]>(`${environment.APIURLProduct}/Review/${prdId}`)
  }
}
