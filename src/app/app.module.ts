import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AllCategoryComponent } from './components/all-category/all-category.component';
import { CartComponent } from './components/cart/cart.component';
import DetailsComponent from './components/details/details.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SlidbarAllcategoryComponent } from './components/slidbar-allcategory/slidbar-allcategory.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DiscountPipe } from './Pipes/discount.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CheckOutComponent } from './components/check-out/check-out.component';
// import { MatDialogModule } from '@angular/material/dialog';

//translate
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    SlidbarAllcategoryComponent,
    WishListComponent,
    HomeComponent,
    DetailsComponent,
    AllCategoryComponent,
    CartComponent,
    MainPageComponent,
    DiscountPipe,
    CheckOutComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    Ng2SearchPipeModule,
     //NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
