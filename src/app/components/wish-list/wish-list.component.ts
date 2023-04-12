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
  // currentProductId: number = 0;
  //   product: IProduct | undefined;
  //   Productquantity: number[] = new Array(4);
  //   cart: IOrderItem[] = [];
  products: IProduct[] = [];
  count:number=0
  constructor(private cookieService: CookieService,  private interactionService: InteractionService,
    private wishlistservics:WishlistService) {
      var useremail=this.cookieService.get("useremail");
    this.wishlistservics.getallproductinwishlist(useremail).subscribe(data=>{
      this.products=data;
      this.count = this.products.length;
    })
   

    
    }
  removeProduct(prdid: number) {
    var useremail = this.cookieService.get("useremail");
    var wishlistprod = new Wishlitproduct(useremail, prdid);
    this.wishlistservics.deleteproducttowishlist(useremail, prdid).subscribe();
    window.location.reload();
  }
 
}
