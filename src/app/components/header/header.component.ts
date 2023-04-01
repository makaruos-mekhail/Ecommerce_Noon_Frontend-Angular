import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ICategory } from "src/app/Models/icategory";
import { CategoyService } from "src/app/Services/categoy.service";
import { ProductService } from "src/app/Services/product.service";
import { Location } from '@angular/common';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements  OnInit{


  categoriesList: ICategory[] = [];


  constructor(
    private categoryservice: CategoyService,
    private router: Router,
    private translate: TranslateService
  )
  {
       //Get Dropdown category
       this.categoryservice.getAllCategories().subscribe((data) => {
       console.log(data);
       this.categoriesList = data;
       });
  }


  ngOnInit(): void {

    
    // handleLanguage(event: any) {
    //   this.translate.use(event.target.value);
    //   console.log(this.translate.currentLang);
    // }
  }
//translata
  handleLanguage(event: any) {
    this.translate.use(event.target.value);
  }

 

  searchpro(str :any){
    this.router.navigate(['AllCategory',str]);

  }


}

