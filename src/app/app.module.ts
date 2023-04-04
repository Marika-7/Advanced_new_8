import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { LayoutModule } from '@angular/cdk/layout';

import { clickOutsideDirective } from './click-outside.directive';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { DiscountComponent } from './pages/discount/discount.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { AboutComponent } from './pages/about/about.component';

import { AdminComponent } from './admin/admin.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminDiscountComponent } from './admin/admin-discount/admin-discount.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    clickOutsideDirective,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    DiscountComponent,
    DeliveryComponent,
    AboutComponent,
    AdminComponent,
    AdminCategoryComponent,
    AdminDiscountComponent,
    AdminProductComponent,
    AdminOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
