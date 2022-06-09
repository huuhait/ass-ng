import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SwiperModule } from 'swiper/angular';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { SaleProductsComponent } from './layouts/home/sale-products/sale-products.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CreateUpdateComponent } from './pages/admin/products/create-update/create-update.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HeaderComponent,
    FooterComponent,
    ProductItemComponent,
    LayoutComponent,
    HomeComponent,
    SaleProductsComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    CartComponent,
    AdminComponent,
    ProductsComponent,
    CreateUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzIconModule,
    SwiperModule,
    MatSlideToggleModule
  ],
  exports: [
    MatSlideToggleModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
