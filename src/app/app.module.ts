import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { DataComponent } from './admin/data/data.component';
import { HttpClientModule } from '@angular/common/http';

console.log('root module loaded...');

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent,
    AdminComponent,
    UsersComponent,
    DataComponent,
  ],
  imports: [
		HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
