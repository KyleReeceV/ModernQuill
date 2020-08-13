import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from '../app/components/login-page/login-page.component';
import { ShopPageComponent } from '../app/components/shop-page/shop-page.component';
import { CartPageComponent } from '../app/components/cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ShopPageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
