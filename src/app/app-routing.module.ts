import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { AddproductComponent } from './addproduct/addproduct.component';


const routes: Routes = [
   {
     path:'' , redirectTo :'main',pathMatch:'full'
   },
  
  {
    path: 'productdetails/:id' , component: ProductDetailsComponent,
  },
  {
    path: 'admin' , component:AddproductComponent,
  },
  {
    path: 'orderhistory' , component: OrderhistoryComponent,
  },
  {
    path: 'login' , component:LoginComponent
  },
  {
    path: 'profile' , component:ProfileComponent
  },
  {
    path: 'home' , component:HomeComponent
  },
  {
    path: 'signup' , component:SignupComponent
  },
  {
    path:'cart' , component: CartComponent
  },
  {
    path:'main' , component: MainComponent
  }
  // {
  //   path:'**' , redirectTo :'login',
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
