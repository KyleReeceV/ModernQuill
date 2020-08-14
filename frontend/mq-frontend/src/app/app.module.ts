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



import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LoginPageComponent } from './login-page/login-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field/';
// import { AngularMaterialModule } from './angular-material.module';
=======
import { LoginPageComponent } from '../app/components/login-page/login-page.component';
import { ShopPageComponent } from '../app/components/shop-page/shop-page.component';
import { CartPageComponent } from '../app/components/cart-page/cart-page.component';
import { PenService } from 'src/app/services/pen.service';
import { PenDialogComponent } from './components/pen-dialog/pen-dialog.component'
>>>>>>> master

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ShopPageComponent,
    CartPageComponent,
    PenDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    HttpClientModule,
    
    // AngularMaterialModule,
    MatSliderModule,
    MatFormFieldModule
    
  ],

  
  providers: [],
=======
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatSliderModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [ PenService ],
>>>>>>> master
  bootstrap: [AppComponent]
})
export class AppModule { }
