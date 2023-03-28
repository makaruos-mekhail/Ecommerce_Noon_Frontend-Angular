import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IBrand } from 'src/app/Models/ibrand';
import { ICategory } from 'src/app/Models/icategory';
import { IProductColor } from 'src/app/Models/iproduct-color';
import { BrandService } from 'src/app/Services/brand.service';
import { CategoyService } from 'src/app/Services/categoy.service';
import { ColorService } from 'src/app/Services/color.service';

@Component({
  selector: 'app-slidbar-allcategory',
  templateUrl: './slidbar-allcategory.component.html',
  styleUrls: ['./slidbar-allcategory.component.css']
})
export class SlidbarAllcategoryComponent {

  categorylist: ICategory[] = [];
  brandsList: IBrand[] = [];
  productColors: IProductColor[]=[];


  constructor(private categoryservice: CategoyService , private brandservice:BrandService, private colorservice:ColorService,private router :Router)
   {
              //All Categories
              this.categoryservice.getAllCategories().subscribe(data => {
               this.categorylist = data;
              })

              //All Brands
              this.brandservice.getAllBrands().subscribe(data => {
              this.brandsList = data;
              })

              // All Color Product
              this.colorservice.getAllColors().subscribe(data => {
              this.productColors = data;
              })
  }

  fPrice: number = 254;
  tPrice: number = 11990;
  
  getprobyprice(fromPrice :any,toPrice :any){
    this.router.navigate(['AllCategory',+fromPrice,+toPrice]);
  }


}
