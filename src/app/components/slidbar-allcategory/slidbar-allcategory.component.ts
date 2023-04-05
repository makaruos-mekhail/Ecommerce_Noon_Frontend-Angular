import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IBrand } from "src/app/Models/ibrand";
import { ICategory } from "src/app/Models/icategory";
import { IProductColor } from "src/app/Models/iproduct-color";
import { BrandService } from "src/app/Services/brand.service";
import { CategoyService } from "src/app/Services/categoy.service";
import { ColorService } from "src/app/Services/color.service";
import { InteractionService } from "src/app/Services/interaction.service";

@Component({
  selector: "app-slidbar-allcategory",
  templateUrl: "./slidbar-allcategory.component.html",
  styleUrls: ["./slidbar-allcategory.component.css"],
})
export class SlidbarAllcategoryComponent {
  lang=localStorage.getItem('lang')
  categorylist: ICategory[] = [];
  brandsList: IBrand[] = [];
  productColors: IProductColor[] = [];

  constructor(
    private categoryservice: CategoyService,
    private brandservice: BrandService,
    private colorservice: ColorService,
    private router: Router,
    private interactionservice: InteractionService
  ) {
    //All Categories
    this.categoryservice.getAllCategories().subscribe((data) => {
      this.categorylist = data;
    });

    //All Brands
    this.brandservice.getAllBrands().subscribe((data) => {
      this.brandsList = data;
    });

    // All Color Product
    this.colorservice.getAllColors().subscribe((data) => {
      this.productColors = data;
    });
  }
  isChecked!: boolean[];
  fPrice: number = 254;
  tPrice: number = 11990;
  category!: string;
  brand!: string;
  color!: string;
  serchbrand(event: any) {
    // this.router.navigate(["AllCategory", ev]);
    
  }

  getprobyprice(fromPrice: number, toPrice: number) {
   
    this.fPrice = fromPrice;
    this.tPrice = toPrice;
    this.interactionservice.sendAll(undefined, this.category, this.brand, fromPrice, toPrice, this.color);

    
  }
  
  sendcolor(_color: string) {
    this.color = _color;
    this.interactionservice.sendAll(undefined, this.category, this.brand, this.fPrice, this.tPrice, _color);

  }
  sendData(category: string) {
    this.category = category;
    this.interactionservice.sendAll(undefined, category, this.brand, this.fPrice, this.tPrice, this.color);
  }
  selectedIndex!: number;
  send(event: any, index: any) {
    this.selectedIndex = event.target.checked ? index : undefined;
    if (event.target.checked) {
      this.brand = event.target.value;
      this.interactionservice.sendAll(undefined, this.category, event.target.value, this.fPrice, this.tPrice, this.color);
    }
  }
}
