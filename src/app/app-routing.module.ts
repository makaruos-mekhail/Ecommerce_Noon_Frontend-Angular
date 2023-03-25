import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AllCategoryComponent } from './components/all-category/all-category.component';
import { CartComponent } from './components/cart/cart.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
// import { SlidbarAllcategoryComponent } from './components/slidbar-allcategory/slidbar-allcategory.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';


const routes: Routes = [
  {path:'', redirectTo:'/Home' , pathMatch:'full'},//default routes path
  {path:'Home', component: HomeComponent,title:'Noon Home'},
  {path:'Cart', component: CartComponent,title:'Noon Cart'},
  {path:'Details', component: DetailsComponent,title:'Noon Details'},
  {path:'WishList', component: WishListComponent,title:'Noon WishList'},
  {path:'AllCategory', component: MainPageComponent,title:'Noon AllCategory'},
  {path:'**', component: NotfoundComponent }, //Widcard path
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
