import { Component } from '@angular/core';
//  import { render } from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  lang = localStorage.getItem('lang');
/**
 *
 */
// constructor() {
//   render({
//     id: "#myPaypalButtons",
//     currency: "EGP",
//     value: "100.00",
//     onApprove: (details) => {
//       alert("Transaction Successfull");
//       console.log("Transaction Successfull");
//     },
//   })
// }
}
