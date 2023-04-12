import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments';
import { CookieService } from 'ngx-cookie-service';
import { IOrder } from 'src/app/Models/iorder';
import { InteractionService } from 'src/app/Services/interaction.service';
import { OrderService } from 'src/app/Services/order.service';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit{
  lang = localStorage.getItem('lang');
  paid! : boolean;
  email = this.cookieService.get("useremail");
  totalPrice = JSON.parse(this.cookieService.get('cart')).reduce((acc: any, item: any) => acc + item.price, 0);
  cart = JSON.parse(this.cookieService.get('cart'));
  usercheckoutdata:string[]=[];

  name:string=""
  address!:string
  phone!:string
  constructor(private orderService: OrderService, private cookieService: CookieService,
    private router:Router,private interactionService:InteractionService) { 
      this.interactionService.checkoutdata$.subscribe(
        data=>{this.usercheckoutdata=data;
          this.name=this.usercheckoutdata[0];
          console.log(this.name);
          this.address=this.usercheckoutdata[1];
          this.phone=this.usercheckoutdata[2];
      //  console.log(name);
      //  console.log(this.usercheckoutdata);
        
        }
      );
  
    render({
      id: "#myPaypalButtons",
      currency: "EGP",
      value: this.totalPrice.toString(),
      
      onApprove: (details) => {
        let button=document.getElementById("order_btn") as HTMLButtonElement;
        button.disabled = false;
        this.paymentmethod="PayBal"
        this.paid = true;     
      },
    }) 
  }
  // name!:string
  // address!:string
  // phone!:string
  ngOnInit(): void {
    // this.interactionService.checkoutdata$.subscribe(
    //   data=>{this.usercheckoutdata=data;
    //     this.name=this.usercheckoutdata[0];
    //     console.log(this.name);
    //     this.address=this.usercheckoutdata[1];
    //     this.phone=this.usercheckoutdata[2];
    //   console.log(name);
    // //  console.log(this.usercheckoutdata);
      
    //   }
    // );
  }
  //this.name=this.usercheckoutdata[0]


//   removeDisabled
removeDisabled(){
 let checkbox=document.getElementById("checkbox") as HTMLInputElement;
 let button=document.getElementById("order_btn") as HTMLButtonElement;
// checkbox.checked || 
  if (checkbox.checked) {
    button.disabled = false;
    this.paymentmethod="cash"
  }
   else {
    button.disabled = true;
  }
}


paymentmethod!:string;
order : IOrder | undefined;
  sendOrder(){
    console.log("send order");
    this.order = {
      username: this.email,
      orderItemsDTO: this.cart,
      totalPrice: this.totalPrice,
      paymentMethod:  this.paymentmethod
    }
    this.orderService.sendOrder(this.order).subscribe((data) => {
      console.log(data);
      this.router.navigate(["/OrderStatus"]);

    })
  }
}  
