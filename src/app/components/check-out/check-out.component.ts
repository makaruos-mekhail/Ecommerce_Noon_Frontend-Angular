import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments';
import { CookieService } from 'ngx-cookie-service';
import { IOrder } from 'src/app/Models/iorder';
import { InteractionService } from 'src/app/Services/interaction.service';
import { OrderService } from 'src/app/Services/order.service';
import { HeaderComponent } from '../header/header.component';
import { IProduct } from 'src/app/Models/iproduct';
import { CategoyService } from 'src/app/Services/categoy.service';
import { CartService } from 'src/app/Services/cart.service';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit{
  lang = localStorage.getItem('lang');
  productInCart: IProduct[] = [];
  totalQuantity: number = 0;
  totalPrice: number = 0;
  paid!: boolean;
  name!: string
  address!: string
  phone!: string
  email = this.cookieService.get("useremail");
  //totalPrice = JSON.parse(this.cookieService.get('cart')).reduce((acc: any, item: any) => acc + item.price, 0);
  cart = JSON.parse(this.cookieService.get('cart'));
  constructor(private orderService: OrderService, private cookieService: CookieService,
    private router: Router,
    private interactionService: InteractionService,
    private cartService:CartService) {
    //get data from cart 
    this.cart = JSON.parse(cookieService.get('cart'));
    let ids: number[] = JSON.parse(this.cookieService.get('cart')).map((item: any) => item.productid);
    this.cartService.getCartItems(ids).subscribe((data) => {
      this.productInCart = data;
      this.totalPrice = JSON.parse(this.cookieService.get('cart')).reduce((acc: any, item: any) => acc + item.price, 0);
    });
      this.totalQuantity = JSON.parse(this.cookieService.get('cart')).reduce((acc: any, item: any) => acc + item.quantity, 0);
    render({
      id: "#myPaypalButtons",

      currency: "EGP",
      value:"1000",
      //value: this.totalPrice.toString(),
      
      onApprove: (details) => {
        alert("transaction successfull");
        let button=document.getElementById("order_btn") as HTMLButtonElement;
        button.disabled = false;
        this.paymentmethod="PayBal"
        this.paid = true;     
        alert("Transaction Successful");
      },
    })  
  }
  
  name!:string
  address!:string
  phone!: string
 
  ngOnInit(): void {

    // this.interactionService.checkoutdata$.subscribe(
    //   (data) => {
    //     debugger
    //     console.log(data);

    //     this.name = data[0]
    //     console.log(this.name);
    //     this.address = data[1]
    //     this.phone = data[2]

    //   }
    // );
  }
 
 
  //ngOnInit(): void {

  //}

removeDisabled(){
 let checkbox=document.getElementById("checkbox") as HTMLInputElement;
 let button=document.getElementById("order_btn") as HTMLButtonElement; 
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
