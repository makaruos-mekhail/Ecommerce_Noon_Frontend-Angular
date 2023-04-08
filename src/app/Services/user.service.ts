import { Injectable } from '@angular/core';
import { IUserLogin } from '../Models/iuser-login';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/iproduct';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Login } from '../Models/login';
import { Register } from '../Models/register';
import { Checkoutdata } from '../Models/checkoutdata';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) { 
  
  }
  ///user login 
  logIn(user: Login): Observable<any>{
    return this.httpclient
      .post<Login>(`${environment.APIURLProduct}/User/LogIn`, user);
  }

  //register
  Registeruser(user: Register): Observable<any>{
    return this.httpclient
      .post<Register>(`${environment.APIURLProduct}/User/Registeration`, user);
  }
  //update user

  UpdateUser(checkoutdto:Checkoutdata):Observable<any> {
    return this.httpclient
      .patch<any>(`${environment.APIURLProduct}/User/updateUser`, checkoutdto)
  }
 
}
