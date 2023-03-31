import { Component, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IProduct } from "src/app/Models/iproduct";
import { IReview } from "src/app/Models/ireview";
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
  product: IProduct | undefined;
  Productquantity: number[] = new Array(4);
  productReviews: IReview[] = [];

  constructor(
    private productservice: ProductService,
    private activateroute: ActivatedRoute,
    private reviewService: ReviewsService
  ) {}

  displayImg(idx: string): void {
    const mainImg = document.getElementById(
      "main-product-img"
    ) as HTMLImageElement;
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

    this.currentProductId = this.activateroute.snapshot.paramMap.get("pid")
      ? Number(this.activateroute.snapshot.paramMap.get("pid"))
      : 0;

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
}
