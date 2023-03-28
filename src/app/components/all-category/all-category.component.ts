import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { CategoyService } from 'src/app/Services/categoy.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent {

  //  productsApi: IProduct[] = [];
  prodListOfCat: IProduct[] = [];
  categoriesList: ICategory[] = [];

  constructor(private productservice: ProductService,
    private categoryservice: CategoyService,
  private router:Router) {
    this.productservice.getAllProducts().subscribe(data1 => {
      this.prodListOfCat = data1;
      // console.log(this.prodListOfCat);
    })

    //categories sidebar
    this.categoryservice.getAllCategories().subscribe(data => {
      this.categoriesList = data;
      console.log(this.categoriesList);
    })
    
  }
  //ORODUCT DETAILS
  getProductDetails(prdid : number) {
    this.router.navigate(['products', prdid])
    }



}
