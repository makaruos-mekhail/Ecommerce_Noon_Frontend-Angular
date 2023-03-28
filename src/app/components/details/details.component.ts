import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export default class DetailsComponent implements OnInit {

  currentProductId: number = 0;
  product: IProduct | undefined;
  Productquantity: number[] = new Array(6)


  constructor(private productservice:ProductService, private activateroute:ActivatedRoute) {


  }

  displayImg(idx: string): void {

    const mainImg = document.getElementById("main-product-img") as HTMLImageElement;
    const selectedImg = document.getElementById(idx) as HTMLImageElement;
    mainImg.src = selectedImg.src;
  }

  changefavButtobColor(x: HTMLElement): void {
    if (x.style.color == "rgb(170, 184, 194)") {
      x.style.color = "rgb(226, 38, 77)";
    } else {
      x.style.color = "#AAB8C2";
    }
  }

  ngOnInit(): void {

    //get product by id
      this.currentProductId = (this.activateroute.snapshot.paramMap.get('pid')) ? Number(this.activateroute.snapshot.paramMap.get('pid')) : 0;
      this.productservice.getProductById(this.currentProductId).subscribe(data => {
        this.product = data;
        console.log(data);
        console.log(this.product?.brand?.nameAr);
      })
  }

}
