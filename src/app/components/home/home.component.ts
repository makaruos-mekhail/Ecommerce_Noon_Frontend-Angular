import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /**
   * 
   */
  hotDealsProduct: IProduct[] = [];
  lang = localStorage.getItem('lang');
  // selectedProduct: IProduct[] = [];
  constructor(private productservice:ProductService,private router:Router) {
    this.productservice.getAllProducts().subscribe(data => {
      this.hotDealsProduct = data;
    })
  }
  getproductDetails(prdid: number) {
    this.router.navigate(['products', prdid])
    window.scrollTo(0,0);
  }

}
