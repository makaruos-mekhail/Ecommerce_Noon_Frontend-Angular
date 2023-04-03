import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce_noon';

  lang=localStorage.getItem('lang');
  dir : string='ltr';
  constructor(){
    if(this.lang=='ar'){
      this.dir='rtl';
    }
  }
}
