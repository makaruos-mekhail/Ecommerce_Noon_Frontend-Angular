import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";
import { ICategory } from "src/app/Models/icategory";
import { CategoyService } from "src/app/Services/categoy.service";
import { ProductService } from "src/app/Services/product.service";
import { Location } from '@angular/common';
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";
import DetailsComponent from "../details/details.component";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {

  categoriesList: ICategory[] = [];

  lang = localStorage.getItem('lang');

  constructor(
    private categoryservice: CategoyService,
    private router: Router,
    private translate: TranslateService  )
  {
       //Get Dropdown category
       this.categoryservice.getAllCategories().subscribe((data) => {
       console.log(data);
       this.categoriesList = data;
       });
       if (this.lang == null) {
        this.lang = 'en';
      }
       this.translate.use(this.lang);
  }

//------------------ Translate --------------

selectedLanguage(event: any) {

  // this.translate.use(event.target.value);
    // ---------- set lang in local storage --------------
  localStorage.setItem('lang', event.target.value);
  this.translate.use(this.lang?this.lang:'en');

    // setTimeout(()=>{
    // }, 1000);
    location.reload();
    console.log(event.target.value);
  }

 

  searchpro(str :any){
    this.router.navigate(['AllCategory',str]);

  }


}

