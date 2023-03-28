import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ICategory } from "src/app/Models/icategory";
import { CategoyService } from "src/app/Services/categoy.service";
import { ProductService } from "src/app/Services/product.service";
import { Location } from '@angular/common';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements  OnInit{

  categoriesList: ICategory[] = [];


  constructor(private categoryservice: CategoyService,private productservice: ProductService,private router :Router, private location :Location)
  {
       //Get Dropdown category
       this.categoryservice.getAllCategories().subscribe((data) => {
       console.log(data);
       this.categoriesList = data;
       });
  }


  ngOnInit(): void {

  }

  searchpro(str :any){
    this.router.navigate(['AllCategory',str]);

  }
}
