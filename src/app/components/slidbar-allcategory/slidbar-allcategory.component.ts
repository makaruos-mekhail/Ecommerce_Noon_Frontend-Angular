import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slidbar-allcategory',
  templateUrl: './slidbar-allcategory.component.html',
  styleUrls: ['./slidbar-allcategory.component.css']
})
export class SlidbarAllcategoryComponent {
  fPrice: number = 254;
  tPrice: number = 11990;
  constructor(private router :Router){}
  getprobyprice(fromPrice :any,toPrice :any){
    //event.preventDefault();
    this.router.navigate(['AllCategory',+fromPrice,+toPrice]);
    //this.location.historyGo(0);

  }
 
}
