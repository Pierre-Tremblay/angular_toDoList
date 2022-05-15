import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { CategoryComponent } from './components/category/category.component';
import { HeaderComponent } from './components/includes/header/header.component';
import { TaskComponent } from './components/task/task.component';
import { UserComponent } from './components/user/user.component';
import { CreateComponent } from './components/admin/create/create.component';
import { UpdateComponent } from './components/admin/update/update.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddCategoryComponent } from './components/category/add-category/add-category.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CategoryComponent,
    HeaderComponent,
    TaskComponent,
    UserComponent,
    CreateComponent,
    UpdateComponent,
    RegisterComponent,
    LoginComponent,
    AddUserComponent,
    AddCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
