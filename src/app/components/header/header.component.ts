import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements  OnInit {
 

  constructor(private productservice: ProductService,private router :Router, private location :Location) {

  }
  ngOnInit(): void {
    // this.productservice.filterproductbyName(this.test).subscribe(data1=>{
    //   this.prodList= data1;
    //   console.log(this.prodList);
    //  })
  }


  // ngOnChanges(): void {
  //   this.productservice.filterproductbyName(this.filter).subscribe(data1 => {
  //     this.prodList = data1;
  //     console.log(this.prodList);
  //   })
  // }
 
  searchpro(str :any){
    //event.preventDefault();
    this.router.navigate(['AllCategory',str]);
    //this.location.historyGo(0);

  }
  

}
