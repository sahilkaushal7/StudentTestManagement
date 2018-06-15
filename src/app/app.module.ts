import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
//angular fire imports
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';

//component imports
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';

//service imports
import { AuthGuard } from "./guards/auth.gaurd";
import { AuthService } from './services/auth.service';
import { StudentsService } from './services/students.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { StudentdetailsComponent } from './components/studentdetails/studentdetails.component';
import { EditstudentComponent } from './components/editstudent/editstudent.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const appRoutes: Routes = [
  {path:'', component:HomeComponent,canActivate:[AuthGuard]},
  {path:'dashboard', component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'addstudent', component:AddstudentComponent,canActivate:[AuthGuard]},
  {path:'students/:id', component:StudentdetailsComponent,canActivate:[AuthGuard]},
  {path:'editstudent/:id', component:EditstudentComponent,canActivate:[AuthGuard]}
];

export const firebaseConfig = {
apiKey: "AIzaSyBYbX3kTI6XbY7zaykD90QmbjBhy3uvDJM",
authDomain: "studenttestmanagement.firebaseapp.com",
databaseURL: "https://studenttestmanagement.firebaseio.com",
storageBucket: "studenttestmanagement.appspot.com",
messagingSenderId: "442100177507"}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    HomeComponent,
    StudentsComponent,
    SidebarComponent,
    AddstudentComponent,
    StudentdetailsComponent,
    EditstudentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    StudentsService,AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
