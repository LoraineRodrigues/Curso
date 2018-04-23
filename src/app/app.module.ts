import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { Routes, RouterModule } from '@angular/router';
import { FormTemplateDrivenComponent } from './form-template-driven/form-template-driven.component';
import { CamelCasePipe } from './camel-case.pipe';

const appRouters: Routes = [
  {path: 'cursos', component: CursosComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CursosComponent,
    FormTemplateDrivenComponent,
    CamelCasePipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(appRouters),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
