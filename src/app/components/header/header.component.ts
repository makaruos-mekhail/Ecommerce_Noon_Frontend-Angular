import { Component } from "@angular/core";
import { ICategory } from "src/app/Models/icategory";
import { CategoyService } from "src/app/Services/categoy.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  categoriesList: ICategory[] = [];
  /**
   *
   */
  constructor(private categoryservice: CategoyService) {
    this.categoryservice.getAllCategories().subscribe((data) => {
      console.log(data);
      
      this.categoriesList = data;
    });
  }
}
