import { Component } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {
  lang = localStorage.getItem('lang');
  constructor() {
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
    
    
//    removeDisabled(){

// input?.setAttribute("checked","true")
    

//   btn?.removeAttribute("disabled")};
 
removeDisabled(){
  var checkbox=document.getElementById("checkbox") as HTMLInputElement
   var button=document.getElementById("order_btn") as HTMLButtonElement

  if (checkbox.checked) {
    button.disabled = false;
  } else {
    button.disabled = true;
  
}
  
}
   
}
  