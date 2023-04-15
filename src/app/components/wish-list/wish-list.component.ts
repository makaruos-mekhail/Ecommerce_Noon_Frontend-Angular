import { Component } from '@angular/core';
import { numbers } from '@material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { IOrderItem } from 'src/app/Models/iorder-item';
import { IProduct } from 'src/app/Models/iproduct';
import { Wishlitproduct } from 'src/app/Models/wishlitproduct';
import { InteractionService } from "src/app/Services/interaction.service";
import { WishlistService } from 'src/app/Services/wishlist.service';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {
  lang = localStorage.getItem('lang');
  cart: IOrderItem[] = [];
  products: IProduct[] = [];
  count:number=0
  constructor(private cookieService: CookieService,  private interactionService: InteractionService,
    private wishlistservics:WishlistService) {
      var useremail=this.cookieService.get("useremail");
    this.wishlistservics.getallproductinwishlist(useremail).subscribe(data=>{
      this.products=data;
      this.count = this.products.length;
    })
    if(cookieService.get('cart')){
      this.cart = JSON.parse(cookieService.get('cart'));
    }
   }


   // -----------------add product to Cart -----------------
   selectedQuantity: number = 1;
   farFutureDate = new Date(2100, 1, 1);
   addToCart(ProductId : number) {
    let cartItem = this.cart.find(item => item.productid === ProductId);
    let product = this.products.find(item => item.id === ProductId);
    if (cartItem) {
      if((cartItem.quantity as number) + this.selectedQuantity <= product!.quantity)
      {
            (cartItem.quantity as number) += this.selectedQuantity;
            (cartItem.price as number) += (this.selectedQuantity * product!.price);
      }
    }
    else {
      cartItem = { productid: ProductId, quantity: this.selectedQuantity, price: (product!.price *this.selectedQuantity)};
      this.cart.push(cartItem);
    }

    this.cookieService.set('cart', JSON.stringify(this.cart), this.farFutureDate);

    let totalQuantity = JSON.parse(this.cookieService.get('cart')).reduce((acc: any, item: any) => acc + item.quantity, 0);
    let totalPrice = JSON.parse(this.cookieService.get('cart')).reduce((acc: any, item: any) => acc + item.price, 0);
  
    this.interactionService.sendCart(totalQuantity, totalPrice);
  }


   // -----------------remove product from wishlist-----------------
  removeProduct(prdid: number) {
    var useremail = this.cookieService.get("useremail");
    var wishlistprod = new Wishlitproduct(useremail, prdid);
    this.wishlistservics.deleteproducttowishlist(useremail, prdid).subscribe();
    window.location.reload();
  }
 
}
