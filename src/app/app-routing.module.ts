import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { AddScategoryComponent } from './pages/admin/add-scategory/add-scategory.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { OrdreComponent } from './pages/admin/ordre/ordre.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { ViewSousCategoryComponent } from './pages/admin/view-sous-category/view-sous-category.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { ListProductComponent } from './pages/list-product/list-product.component';
import { LoginComponent } from './pages/login/login.component';
import { PanierComponent } from './pages/panier/panier.component';

import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './service/admin.guard';
import { CustomerGuard } from './service/customer.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'product',
    component: ListProductComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductsComponent,
    pathMatch: 'full',
  },
  {path: 'logout', component: LoginComponent},
  {
    path: 'admin',
    component: DashboardComponent,
    
    canActivate:[AdminGuard],
    children:[
      {
        path: '',
        component:WelcomeComponent,
      },
      {
        path: 'profile',
        component:ProfileComponent,
      },
      {
        path: 'categories',
        component:ViewCategoryComponent,
      },
      {
        path: 'add-category',
        component:AddCategoryComponent,
      },
      {
        path: 'souscategories',
        component:ViewSousCategoryComponent,
      },
      {
        path: 'add-souscategory',
        component:AddScategoryComponent,
      },
      {
        path: 'products',
        component:ProductsComponent,
      },
      {
        path: 'add-product',
        component:AddProductComponent,
      },
      {
        path: 'orders',
        component:OrdreComponent,
      },
    ]
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    pathMatch: 'full',
    canActivate:[CustomerGuard],
  },
  
  {
    path: 'panier',
    component: PanierComponent,
    pathMatch: 'full',
    canActivate:[CustomerGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
