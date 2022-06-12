import { SearchComponent } from './pages/search/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { CreateUpdateComponent } from './pages/admin/products/create-update/create-update.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductComponent } from './pages/product/product.component';
import { RegisterComponent } from './pages/register/register.component';
import { CategoryComponent } from './pages/category/category.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'search', component: SearchComponent },
  { path: 'category/:id', component: CategoryComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      // { path: '', redirectTo: 'products', pathMatch: 'full' },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/create',
        component: CreateUpdateComponent,
        data: {
          type: "create"
        }
      },
      {
        path: 'products/:id',
        component: CreateUpdateComponent,
        data: {
          type: "update"
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
