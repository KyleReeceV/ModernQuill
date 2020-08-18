import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from  '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule, MatList} from '@angular/material/list'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from '../app/components/login-page/login-page.component';
import { ShopPageComponent } from '../app/components/shop-page/shop-page.component';
import { CartPageComponent } from '../app/components/cart-page/cart-page.component';
import { PenService } from 'src/app/services/pen.service';
import { PenDialogComponent } from './components/pen-dialog/pen-dialog.component';
import { TestHttpReqForOrderAndCartComponent } from './components/test-http-req-for-order-and-cart/test-http-req-for-order-and-cart.component';

import { DatePipe } from '@angular/common';
import { LogoutComponent } from './components/logout/logout.component';
import { NavigtationBarComponent } from './components/navigtation-bar/navigtation-bar.component';
import { OrderComponent } from './components/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ShopPageComponent,
    CartPageComponent,
    PenDialogComponent,
    TestHttpReqForOrderAndCartComponent,
    LogoutComponent,
    NavigtationBarComponent,
    OrderComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSliderModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule,
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [ PenService , DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
