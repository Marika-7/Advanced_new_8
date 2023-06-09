import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'product/:category', component: ProductComponent },
  {path: 'discount', component: DiscountComponent },
  {path: 'delivery', component: DeliveryComponent },
  {path: 'about', component: AboutComponent },
  {path: 'admin', component: AdminComponent, children: [
    {path: 'category', component: AdminCategoryComponent },
    {path: 'discount', component: AdminDiscountComponent },
    {path: 'product', component: AdminProductComponent },
    {path: 'order', component: AdminOrderComponent },
    {path: '', pathMatch: 'full', redirectTo: 'discount' }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
