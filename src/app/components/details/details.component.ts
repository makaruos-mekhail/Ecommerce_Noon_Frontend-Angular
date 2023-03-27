import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
   displayImg(idx: string): void {
    const mainImg = document.getElementById("main-product-img") as HTMLImageElement;
    const selectedImg = document.getElementById(idx) as HTMLImageElement;
    mainImg.src = selectedImg.src;
  }



   changefavButtobColor(x: HTMLElement): void {
    if (x.style.color === "rgb(170, 184, 194)") {
      x.style.color = "rgb(226, 38, 77)";
    } else {
      x.style.color = "#AAB8C2";
    }
  }
}
