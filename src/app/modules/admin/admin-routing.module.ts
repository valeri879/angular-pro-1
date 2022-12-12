import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriesComponent} from 'src/app/admin/categories/categories.component';

const routes: Routes = [
	{ path: 'categories', component: CategoriesComponent, title: 'Admin categories' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
