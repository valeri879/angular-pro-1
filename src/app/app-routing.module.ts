import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DataComponent } from './admin/data/data.component';
import { UsersComponent } from './admin/users/users.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

// localhost:4200/admin/users

const routes: Routes = [
  { path: 'main', component: MainComponent, title: 'Main'},
  {
    path: 'admin', component: AdminComponent, title: 'Admin',
    children: [
      { path: 'users', component: UsersComponent, title: 'Admin users' },
      { path: 'data', component: DataComponent, title: 'Admin data' },
    ]
  },
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
