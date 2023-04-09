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
  // currentProductId: number = 0;
  //   product: IProduct | undefined;
  //   Productquantity: number[] = new Array(4);
  //   cart: IOrderItem[] = [];
    
  constructor(private cookieService: CookieService,    private interactionService: InteractionService,) {
  
    // if(cookieService.get('cart')){
    //   this.cart = JSON.parse(cookieService.get('cart'));
    }

  // }


//    // ----------- Add To Cart --------
//    selectedQuantity: number = 1;

//    farFutureDate = new Date('2050-01-01');
 
//    selectQuantity(event: any){
//    this.selectedQuantity = Number(event.target.value);
//  }

//   addToCart() {
//     let cartItem = this.cart.find(item => item.id === this.currentProductId);
//     if (cartItem) {
//       if((cartItem.quantity as number) + this.selectedQuantity <= this.product!.quantity)
//       {
//             (cartItem.quantity as number) += this.selectedQuantity;
//             (cartItem.price as number) += (this.selectedQuantity * this.product!.price);
//       }
//     }
//     else {
//       cartItem = { id: this.currentProductId, quantity: this.selectedQuantity, price: (this.product!.price *this.selectedQuantity)};
//       this.cart.push(cartItem);
//     }

//     this.cookieService.set('cart', JSON.stringify(this.cart), this.farFutureDate);
//     console.log(JSON.parse(this.cookieService.get('cart')));

//     let totalQuantity = JSON.parse(this.cookieService.get('cart')).reduce((acc: any, item: any) => acc + item.quantity, 0);
//     let totalPrice = JSON.parse(this.cookieService.get('cart')).reduce((acc: any, item: any) => acc + item.price, 0);
  
//     this.interactionService.sendCart(totalQuantity, totalPrice);
//   }
}
