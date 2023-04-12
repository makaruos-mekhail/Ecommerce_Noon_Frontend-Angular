import { Injectable } from '@angular/core';
import {Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  //data!: string;
  private filterMessageSource = new Subject<string>();
  filterMessage$ = this.filterMessageSource.asObservable();
//filter price
  private filterPriceSource = new Subject<number[]>();
  filterPrice$ = this.filterPriceSource.asObservable();
  //filter all
  private filterALLSource = new Subject<any[]>();
  filterAll$ = this.filterALLSource.asObservable();
  // add to cart
  private addToCart = new Subject<any[]>();
  addToCart$ = this.addToCart.asObservable();
//checkout data
private checkoutdata=new Subject<string[]>();
checkoutdata$ =this.checkoutdata.asObservable();
//changeImages in checkout
 

  constructor() { }

  sendMessage(message: string) {
    this.filterMessageSource.next(message); 
  }
  ranges: number[] = [];
  //filter price 
  sendPrice(from: number, to: number) {
    this.ranges=[from,to]
    this.filterPriceSource.next(this.ranges);
  }

  all: any[] = [];
  sendAll(name?:string,category?: string, brand?: string, from?: number, to?: number, 
    colorName?: string) {
    this.all = [name,category, brand, from, to, colorName];
    this.filterALLSource.next(this.all);
  }

  sendCart(quantity: number, totalPrice: number) {
    this.addToCart.next([quantity, totalPrice]);
  }
  checkdata: string[] = [];
  sendchseckoutdata(name:string , address:string,phone:string)
  {
    this.checkdata=[name,address,phone];
    this.checkoutdata.next(this.checkdata);
  }
  // setData(x: string) {
  //   this.data = x;
  // }
  // getData() {
  //   return this.data;
  // }
}
