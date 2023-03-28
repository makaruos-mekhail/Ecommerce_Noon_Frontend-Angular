import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { CategoyService } from 'src/app/Services/categoy.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements OnChanges, OnInit {

  prodList: IProduct[] = [];
  categoriesList: ICategory[] = [];

  filter: any = '';
  fromPrice: number = 0;
  toPrice: number = 0;

  constructor(private productservice: ProductService,private categoryservice: CategoyService,private router:Router,private activerouter: ActivatedRoute)
   {
       //Get all Product
       this.productservice.getAllProducts().subscribe(data1 => {
         this.prodList = data1;
       })

        //categories sidebar Get all categories
        this.categoryservice.getAllCategories().subscribe(data => {
          this.categoriesList = data;
        })

        // Get  Name From URl
        this.filter = this.activerouter.snapshot.paramMap.get('str')
           ? this.activerouter.snapshot.paramMap.get('str'): '';

        // Get  fromPrice From URl
        this.fromPrice = this.activerouter.snapshot.paramMap.get('fromPrice')
           ? Number(this.activerouter.snapshot.paramMap.get('fromPrice')): 0;

        // Get  ToPrice From URl
        this.toPrice = this.activerouter.snapshot.paramMap.get('toPrice')
           ? Number(this.activerouter.snapshot.paramMap.get('toPrice')) : 0;
  }


  //ORODUCT DETAILS
  getProductDetails(prdid : number) {
    this.router.navigate(['products', prdid])
  }



  ngOnInit(): void {
    //filter name
    this.productservice.filterproductbyName(this.filter).subscribe((data1) => {
      this.prodList = data1;
    });

    //filter price
    this.productservice
      .getbyprice(this.fromPrice, this.toPrice)
      .subscribe((data1) => {
        this.prodList = data1;
        console.log(this.prodList);
      });
  }

  
  ngOnChanges(): void {}



}
