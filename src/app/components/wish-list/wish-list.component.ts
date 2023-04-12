import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IOrderItem } from 'src/app/Models/iorder-item';
import { IProduct } from 'src/app/Models/iproduct';
import { InteractionService } from "src/app/Services/interaction.service";

@Component({
  selector: 'app-wish-list',
  
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {
  lang = localStorage.getItem('lang');


  constructor() {
  

  }
  

}
