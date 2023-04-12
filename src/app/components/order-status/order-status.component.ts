import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";
import { CookieService } from 'ngx-cookie-service';
import { IOrder } from 'src/app/Models/iorder';
import { Orders } from 'src/app/Models/orders';
import { OrderService } from 'src/app/Services/order.service';


@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent {

  lang = localStorage.getItem('lang');
  orders!: Orders;

  constructor(private translate: TranslateService,
    private cookieService:CookieService,
    private orderService:OrderService,
    ){
    if (this.lang == null) {
      this.lang = 'en';
    }
    this.translate.use(this.lang);
    var useremail = this.cookieService.get("useremail");
    this.orderService.getUserOrders(useremail, "Processing")
      .subscribe(data => {
        this.orders = data;
      })

    //this.nav.navigateRoot('/tabs/home');
    // Replace the current URL with a new URL without adding it to the browser's history
    //window.history.replaceState({}, '', '/new-url');
  }
}
