import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";
import { CookieService } from 'ngx-cookie-service';
import { Orders } from 'src/app/Models/orders';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-ordered',
  templateUrl: './ordered.component.html',
  styleUrls: ['./ordered.component.css']
})
export class OrderedComponent implements OnInit {
  lang = localStorage.getItem('lang');
  allorders: Orders[]|undefined;

  userEmail = this.cookieService.get("useremail");
  constructor(private translate: TranslateService,
    private cookieService: CookieService,
    private orderservice: OrderService)
  {
    if (this.lang == null) {
      this.lang = 'en';
    }
    this.translate.use(this.lang);
    //get all orders of user
    var userEmail = this.cookieService.get("useremail");
    this.orderservice.getAllUserOrders(userEmail).subscribe((data) => {
      this.allorders = data
      console.log(this.allorders);
    });
   console.log(this.allorders);
  
   
    
  }
   ngOnInit(): void {
//     setTimeout(() => {
//       this.getorders();
//       console.log(this.allorders);
//     }, 5000);
   
   
  }
//   getorders(): void{
    
//     this.orderservice.getAllUserOrders(this.userEmail).subscribe(data => {
//       this.allorders = data
//       console.log(this.allorders);
      
//   })
// }
  }

  
