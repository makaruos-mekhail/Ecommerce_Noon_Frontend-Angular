import { Component, OnChanges,SimpleChanges } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent  {

  //  productsApi: IProduct[] = [];
   prodListOfCat:IProduct[]=[];

   constructor(private productservice:ProductService){
    this.productservice.getAllProducts().subscribe(data1=>{
      this.prodListOfCat= data1;
      console.log(this.prodListOfCat);
     })

  // ngOnChanges(changes: SimpleChanges): void {


    //  })
  // }


}
}
