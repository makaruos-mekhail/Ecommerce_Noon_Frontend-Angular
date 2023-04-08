import { Component } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
import { Checkoutdata } from 'src/app/Models/checkoutdata';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  lang = localStorage.getItem('lang');



constructor( private userervice:UserService) {
  render({
    id: "#myPaypalButtons",
    currency: "EGP",
    value: "100.00",
    onApprove: (details) => {
      alert("Transaction Successfull");
      console.log("Transaction Successfull");
    },
  })
  }
  
  
  sendCheckOutData(addres: string, phone: string) {
    var cdata = new Checkoutdata(addres, phone);
    this.userervice.UpdateUser(cdata).subscribe(data => { console.log(data); }
      );
  }
}
