import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CategoriesComponent } from '../../admin/categories/categories.component';
import { TagsComponent } from '../../admin/tags/tags.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    CategoriesComponent,
    TagsComponent
  ],
  imports: [
		ReactiveFormsModule,
    CommonModule,
		SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
