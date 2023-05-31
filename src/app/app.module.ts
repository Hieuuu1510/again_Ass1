import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ProductListComponent } from './page/admin/product-list/product-list.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { AddProductComponent } from './page/admin/add-product/add-product.component';
import { EditProductComponent } from './page/admin/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutClientComponent,
    AdminLayoutComponent,
    ProductListComponent,
    DashboardComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
