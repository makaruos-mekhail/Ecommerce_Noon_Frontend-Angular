import { Component } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { CookieService } from 'ngx-cookie-service';
import { IOrder } from 'src/app/Models/iorder';
import { OrderService } from 'src/app/Services/order.service';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {
  lang = localStorage.getItem('lang');
  paid! : boolean;
  email = this.cookieService.get("useremail");
  totalPrice = JSON.parse(this.cookieService.get('cart')).reduce((acc: any, item: any) => acc + item.price, 0);
  cart = JSON.parse(this.cookieService.get('cart'));

  constructor(private orderService: OrderService, private cookieService: CookieService) { 
    render({
      id: "#myPaypalButtons",
      currency: "EGP",
      value: this.totalPrice.toString(),
      
      onApprove: (details) => {
        let button=document.getElementById("order_btn") as HTMLButtonElement;
        button.disabled = false;
        this.paid = true;     
      },
    }) 
  }


//   removeDisabled
removeDisabled(){
 let checkbox=document.getElementById("checkbox") as HTMLInputElement;
 let button=document.getElementById("order_btn") as HTMLButtonElement;
// checkbox.checked || 
  if (checkbox.checked) {
    button.disabled = false;
  }
   else {
    button.disabled = true;
  }
}


order : IOrder | undefined;
  sendOrder(){
    console.log("send order");
    this.order = {
      username: this.email,
      orderItemsDTO: this.cart,
      totalPrice: this.totalPrice,
      paymentMethod: "ayhagaaaa"
    }
    this.orderService.sendOrder(this.order).subscribe((data) => {
      console.log(data);
    })
  }
}  