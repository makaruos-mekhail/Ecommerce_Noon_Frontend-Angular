import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBrand } from 'src/app/Models/ibrand';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { IProductColor } from 'src/app/Models/iproduct-color';
import { BrandService } from 'src/app/Services/brand.service';
import { CategoyService } from 'src/app/Services/categoy.service';
import { ColorService } from 'src/app/Services/color.service';
import { ProductService } from 'src/app/Services/product.service';
import { HeaderComponent } from '../header/header.component';
import { InteractionService } from 'src/app/Services/interaction.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent implements  OnInit  {

  prodList: IProduct[] = [];
  categoriesList: ICategory[] = [];
  brandList: IBrand[] = [];
  colorsList: IProductColor[] = [];
  lang = localStorage.getItem('lang');

  filter: any = '';
  fromPrice: number = 0;
  toPrice: number = 0;
  brandname: string = "";
  filterTerm!: string;

  @ViewChild('asd') asd?: HeaderComponent;
  constructor(private productservice: ProductService
    , private categoryservice: CategoyService,
    private router: Router,
    private activerouter: ActivatedRoute
    , private brandservice: BrandService,
    private clorservice: ColorService,
    private interctionservice :InteractionService)
   {
       //Get all Product
       this.productservice.getAllProducts().subscribe(data1 => {
         this.prodList = data1;
       })

        //categories sidebar Get all categories
        this.categoryservice.getAllCategories().subscribe(data => {
          this.categoriesList = data;
        })
        //all brands
    this.brandservice.getAllBrands().subscribe(data => {
      this.brandList = data;
    })
    //all colors
    this.clorservice.getAllColors().subscribe(data => {
      this.colorsList = data;
    });
  }
  //ORODUCT DETAILS
  getProductDetails(prdid: number) {
    this.router.navigate(['products', prdid])
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {
    this.interctionservice.filterAll$.subscribe(message => {
      
      this.productservice
        .filterProducts(message[0],message[1],message[2],message[3],message[4],message[5])
        .subscribe(data => {
          setTimeout(() => {
            this.prodList = data;
          }, 500);
          
        })
    })

 
  }
}
