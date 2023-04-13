import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-ordered',
  templateUrl: './ordered.component.html',
  styleUrls: ['./ordered.component.css']
})
export class OrderedComponent {
  lang = localStorage.getItem('lang');

  constructor(private translate: TranslateService,
    private cookieService:CookieService,

    ){
    if (this.lang == null) {
      this.lang = 'en';
    }
    this.translate.use(this.lang);
  }
}
