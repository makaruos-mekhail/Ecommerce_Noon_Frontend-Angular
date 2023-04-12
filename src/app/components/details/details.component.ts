import { Component, ElementRef, HostListener, OnInit, Output, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { CookieService } from "ngx-cookie-service";
import { IOrderDetails } from "ngx-paypal";
import { IOrderItem } from "src/app/Models/iorder-item";
import { IProduct } from "src/app/Models/iproduct";
import { IReview } from "src/app/Models/ireview";
import { InteractionService } from "src/app/Services/interaction.service";
import { ProductService } from "src/app/Services/product.service";
import { ReviewsService } from "src/app/Services/reviews.service";


@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],

})
export default class DetailsComponent implements OnInit {
  excellent: number[] = new Array(5);
  verygood: number[] = new Array(4);
  good: number[] = new Array(3);
  currentProductId: number = 0;
  product?: IProduct ;
  Productquantity: number[] = new Array(5);
  productReviews: IReview[] = [];
  lang = localStorage.getItem('lang');
  cart: IOrderItem[] = [];
  // totalPrice: number = 0;
  // totalQuantity: number = 0;

  constructor(
    private productservice: ProductService,
    private activateroute: ActivatedRoute,
    private reviewService: ReviewsService,
    private translate: TranslateService,
    private cookieService: CookieService,
    private interactionService: InteractionService,
  ) { 
    
    if(cookieService.get('cart')){
      this.cart = JSON.parse(cookieService.get('cart'));
    }
    
  }
  // ngOnInit() {
  //   const image = document.querySelector('img') as HTMLImageElement;
  //   this.nativeWidth = image.naturalWidth;
  //   this.nativeHeight = image.naturalHeight;
  // }

  displayImg(idx: number): void {
    const mainImg = document.getElementById("main-product-imgggg") as HTMLImageElement;
    const selectedImg = document.getElementById(`id${idx+1}`) as HTMLImageElement;
  
    if (selectedImg) {
      mainImg.src = selectedImg.src;
    }
  }


  iconColor = 'grey';
  toggleFavorite() {
    if (this.iconColor === 'grey') {
      this.iconColor = '#D53403';
    } else {
      this.iconColor = 'grey';
    }
  }

 
  ngOnInit(): void {
    //get product by id

    this.currentProductId = this.activateroute.snapshot.paramMap.get("pid")?
       Number(this.activateroute.snapshot.paramMap.get("pid")) : 0;

    this.productservice
      .getProductById(this.currentProductId)
      .subscribe((data) => {
        this.product = data;
      });
  }

  getReviws() {
    this.reviewService
      .getReviewsByProductId(this.currentProductId)
      .subscribe((data) => {
        this.productReviews = data;
        console.log(data);
        console.log(this.productReviews);
      });
  }

  // ----------- Add To Cart --------
  selectedQuantity: number = 1;

  farFutureDate = new Date('2050-01-01');

  selectQuantity(event: any){
  this.selectedQuantity = Number(event.target.value);
}


  addToCart() {
    let cartItem = this.cart.find(item => item.productid === this.currentProductId);
    if (cartItem) {
      if((cartItem.quantity as number) + this.selectedQuantity <= this.product!.quantity)
      {
            (cartItem.quantity as number) += this.selectedQuantity;
            (cartItem.price as number) += (this.selectedQuantity * this.product!.price);
      }
    }
    else {
      cartItem = { productid: this.currentProductId, quantity: this.selectedQuantity, price: (this.product!.price *this.selectedQuantity)};
      this.cart.push(cartItem);
    }

    this.cookieService.set('cart', JSON.stringify(this.cart), this.farFutureDate);
    console.log(JSON.parse(this.cookieService.get('cart')));

    let totalQuantity = JSON.parse(this.cookieService.get('cart')).reduce((acc: any, item: any) => acc + item.quantity, 0);
    let totalPrice = JSON.parse(this.cookieService.get('cart')).reduce((acc: any, item: any) => acc + item.price, 0);
  
    this.interactionService.sendCart(totalQuantity, totalPrice);
  }

}
