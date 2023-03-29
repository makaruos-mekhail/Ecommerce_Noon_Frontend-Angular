import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HelppComponent } from './components/helpp/helpp.component';
import DetailsComponent from './components/details/details.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },//default routes path
  { path: 'Home', component: HomeComponent, title: 'Noon Home' },
  { path: 'Cart', component: CartComponent, title: 'Noon Cart' },
  { path: 'WishList', component: WishListComponent, title: 'Noon WishList' },
  { path: 'AllCategory', component: MainPageComponent, title: 'Noon AllCategory' },
  { path: 'Help', component: HelppComponent, title: 'Noon Help' },
  { path: 'products/:pid', component: DetailsComponent, title: 'Noon Details' },
  { path: 'AllCategory/:str', component: MainPageComponent,title:'Noon AllCategory'},
  { path: 'AllCategory/:fromPrice/:toPrice', component: MainPageComponent,title:'Noon AllCategory'},
  { path: '**', component: NotfoundComponent }, //Widcard path
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
