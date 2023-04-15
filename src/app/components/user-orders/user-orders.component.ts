import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { Orders } from 'src/app/Models/orders';
import { OrderService } from 'src/app/Services/order.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent {
  allorders: Orders[] = [];
  userName: string = "";
  lang = localStorage.getItem('lang');
  constructor(private cookieService: CookieService,
    private orderservice: OrderService,
    private userservice: UserService,
    private translate: TranslateService
  ) {
    if (this.lang == null) {
      this.lang = 'en';
    }
    this.translate.use(this.lang);
    var userEmail = this.cookieService.get("useremail");
    this.orderservice.getAllUserOrders(userEmail).subscribe((data) => {
      this.allorders = data
      console.log(this.allorders);
      

    });
/// get current user
    this.userservice.getUserName(userEmail).subscribe(
      (data) => {
        this.userName=data.firstName
        console.log(data);
        console.log(this.userName);
        
      }
    );
  }

  //cancelOrder
  cancelOrder(orderid: number) {
    this.orderservice.cancelOrder(orderid).subscribe();
    setTimeout(() => {
      location.reload();
    }, 100);    
    
  }
}
