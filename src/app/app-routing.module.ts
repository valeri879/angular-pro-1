import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DataComponent } from './admin/data/data.component';
import { UsersComponent } from './admin/users/users.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {BlogListComponent} from './blog-list/blog-list.component';
import { ContactComponent } from './contact/contact.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProfileComponent } from './profile/profile.component';

// localhost:4200/admin/users

const routes: Routes = [
  { path: 'main', component: MainComponent, title: 'Main'},
  { path: 'login', component: LoginComponent, title: 'Login', canActivate: [LoginGuard]},
  { path: 'profile', component: ProfileComponent, title: 'Profile'},
  {
    path: 'admin', component: AdminComponent, title: 'Admin',
    children: [
      { path: 'users', component: UsersComponent, title: 'Admin users' },
      { path: 'data', component: DataComponent, title: 'Admin data' },
    ]
  },
	{ path: 'blog-list', component: BlogListComponent, title: 'All blogs' },
	{ path: 'blog-detail/:id', component: BlogDetailComponent, title: 'Blog detail' },
  {
    path: 'contact', 
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule),
    title: 'Contact' 
  },
  {
    path: 'product', 
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule),
    title: 'Product list'
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
