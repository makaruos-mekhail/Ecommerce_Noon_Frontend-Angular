import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments';
import { CookieService } from 'ngx-cookie-service';
import { IOrderItem } from 'src/app/Models/iorder-item';
import { IProduct } from 'src/app/Models/iproduct';
import { CartService } from 'src/app/Services/cart.service';
import { InteractionService } from 'src/app/Services/interaction.service';
import { Checkoutdata } from 'src/app/Models/checkoutdata';
import { UserService } from 'src/app/Services/user.service';
import { ModalService } from 'src/app/Services/modal.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  lang = localStorage.getItem('lang');
  checklogin: boolean = false;
  productQuantity: number[] = new Array(5);
  productInCart :IProduct[] = [];
  cart: IOrderItem[] = [];
  totalQuantity : number = 0;
  totalPrice : number = 0;
  farFutureDate = new Date(2030, 1, 1);
  constructor( private interactionservice: InteractionService,
     private cookieService: CookieService, private cartService: CartService,
    private router: Router, private userervice: UserService,
  private modalservice:ModalService) {
    this.checklogin = this.cookieService.check("useremail")
      if(!cookieService.get('cart')){
        this.cookieService.set('cart', JSON.stringify(this.cart), this.farFutureDate);
      }
      else{
        this.cart = JSON.parse(cookieService.get('cart'));
        let ids : number[] = JSON.parse(this.cookieService.get('cart')).map((item: any) => item.productid);
        this.cartService.getCartItems(ids).subscribe((data) => {
        this.productInCart = data;
        this.totalPrice = JSON.parse(this.cookieService.get('cart')).reduce((acc: any, item: any) => acc + item.price, 0);
        this.totalQuantity = JSON.parse(this.cookieService.get('cart')).reduce((acc: any, item: any) => acc + item.quantity, 0);
       });
      }
  }

getProductDetails(prdid: number) {
    this.router.navigate(['products', prdid])
    window.scrollTo(0, 0);
  }
  //open login modal
  openModal() {
    this.modalservice.show()
    console.log(this.modalservice.show());
  
    console.log("test");
    
  }

  // ------------ remove Item From Cart ------------
  removeItemFromCart(event: any ,id: number) {
    console.log("remove item from cart "+id);
    
    let cartItem = this.cart.find(item => item.productid === id);
    console.log(cartItem);
    
    if (cartItem) {
      this.cart.splice(this.cart.indexOf(cartItem), 1);
      this.cookieService.set('cart', JSON.stringify(this.cart), this.farFutureDate);
      this.totalQuantity = JSON.parse(this.cookieService.get('cart')).reduce((acc: any, item: any) => acc + item.quantity, 0);
      this.totalPrice = JSON.parse(this.cookieService.get('cart')).reduce((acc: any, item: any) => acc + item.price, 0);
      this.interactionservice.sendCart(this.totalQuantity, this.totalPrice);
    }
    event.target.parentElement.parentElement.parentElement.remove();
  }
 //send data to checkout componenet
  
sendCheckOutData(addres: string, phone: string,fnum:string,firstname:string,lastname:string) {
  var useremail = this.cookieService.get("useremail");
  var ph = "+20".concat(fnum).concat(phone)
  this.interactionservice.sendchseckoutdata(firstname.concat(lastname), addres, ph);
  var cdata = new Checkoutdata(addres, ph,useremail);
  this.userervice.UpdateUser(cdata).subscribe(
  );
  this.router.navigate(['/Checkout']);
  }

  // ------------ get Quantity By product Id ------------
  getQuantityByproductId(id: number) {
    let cartItem = this.cart.find(item => item.productid === id);
    if (cartItem) {
      console.log(id + ":  "+ cartItem.quantity);
      return cartItem.quantity;
    }
    return 0;
  }
    
  // ------------ update Item Quantity ------------
  updateItemQuantity(event: any, id: number) {
    console.log("update item quantity "+id);
    let cartItem = this.cart.find(item => item.productid === id);
    console.log(cartItem);
    if (cartItem) {
      let newQuantity = Number(event.target.value);
      cartItem.quantity = newQuantity;
      cartItem.price = (newQuantity * cartItem.price);
    }
    this.cookieService.set('cart', JSON.stringify(this.cart), this.farFutureDate);
    location.reload();
  }

}