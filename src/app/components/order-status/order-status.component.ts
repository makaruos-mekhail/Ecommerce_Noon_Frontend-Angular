import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";


@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent {

  lang = localStorage.getItem('lang');

  constructor(    private translate: TranslateService,
    ){
    if (this.lang == null) {
      this.lang = 'en';
    }
  this.translate.use(this.lang);
  }
}
