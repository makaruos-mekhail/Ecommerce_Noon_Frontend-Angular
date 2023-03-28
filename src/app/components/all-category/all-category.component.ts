import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnChanges,OnInit {

  //  productsApi: IProduct[] = [];
  prodListOfCat: IProduct[] = [];
  //prodList: IProduct[] = [];
 filter: any = ""
 fromPrice: number = 0;
 toPrice: number = 0;
  constructor(private productservice: ProductService , private activerouter:ActivatedRoute) {
    this.filter=this.activerouter.snapshot.paramMap.get('str')?this.activerouter.snapshot.paramMap.get('str'):'';
    this.fromPrice=this.activerouter.snapshot.paramMap.get('fromPrice')?Number (this.activerouter.snapshot.paramMap.get('fromPrice')):0;
    this.toPrice=this.activerouter.snapshot.paramMap.get('toPrice')?Number (this.activerouter.snapshot.paramMap.get('toPrice')):0;
    console.log(this.fromPrice,this.toPrice)
    // this.productservice.getAllProducts().subscribe(data1 => {
    //   this.prodListOfCat = data1;
    //   console.log(this.prodListOfCat);
    // })

  }
  ngOnInit(): void {
    //filter name
    this.productservice.filterproductbyName(this.filter).subscribe(data1 => {
      this.prodListOfCat = data1;
     // console.log(this.prodListOfCat);
  })
  //filter price
  this.productservice.getbyprice(this.fromPrice,this.toPrice).subscribe(data1 => {
    this.prodListOfCat = data1;
    console.log(this.prodListOfCat);
})
  }
  ngOnChanges(): void {
    
}


  // ngOnChanges(changes: SimpleChanges): void {


    //  })
  // }



}
