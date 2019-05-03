import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { BookComponent } from './book/book.component';
import { ShopingService } from './shoping.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CatalogComponent,
    CartComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ShopingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
