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
import { TestService } from "./services/test.service";
import { AuthGuard } from "./guards/auth.gaurd";
import { AuthService } from './services/auth.service';
import { StudentsService } from './services/students.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddstudentComponent } from './components/addstudent/addstudent.component';
import { StudentdetailsComponent } from './components/studentdetails/studentdetails.component';
import { EditstudentComponent } from './components/editstudent/editstudent.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TestsComponent } from './components/tests/tests.component';
import { AddtestsComponent } from './components/addtests/addtests.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { StudenthomeComponent } from './components/studenthome/studenthome.component';
import { TeacherhomeComponent } from './components/teacherhome/teacherhome.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { TaketestComponent } from './components/taketest/taketest.component';
import { SubjectComponent } from './components/subject/subject.component';
import { GetmarksComponent } from './components/getmarks/getmarks.component';
import { AddteacherComponent } from './components/addteacher/addteacher.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentnavComponent } from './components/navbar/studentnav/studentnav.component';
import { AdminnavComponent } from './components/navbar/adminnav/adminnav.component';
import { TeachernavComponent } from './components/navbar/teachernav/teachernav.component';


const appRoutes: Routes = [
  {path:'', component:HomeComponent,canActivate:[AuthGuard]},
  {path:'dashboard', component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'addtest', component:AddtestsComponent,canActivate:[AuthGuard]},
  {path:'questions', component:QuestionsComponent,canActivate:[AuthGuard]},
  {path:'register', component:RegisterComponent,canActivate:[AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'adminhome', component:AdminhomeComponent,canActivate:[AuthGuard]},
  {path:'studenthome', component:StudenthomeComponent,canActivate:[AuthGuard]},
  {path:'teacherhome', component:TeacherhomeComponent,canActivate:[AuthGuard]},
  {path:'addstudent', component:AddstudentComponent,canActivate:[AuthGuard]},
  {path:'students/:id', component:StudentdetailsComponent,canActivate:[AuthGuard]},
  {path:'editstudent/:id', component:EditstudentComponent,canActivate:[AuthGuard]},
  {path:'test', component:TestsComponent,canActivate:[AuthGuard]},
  {path:'taketest', component:TaketestComponent,canActivate:[AuthGuard]},
  {path:'subject/:id', component:SubjectComponent,canActivate:[AuthGuard]},
  {path:'home', component:HomeComponent,canActivate:[AuthGuard]},
  {path:'getmarks', component:GetmarksComponent,canActivate:[AuthGuard]},
  {path:'addteacher', component:AddteacherComponent,canActivate:[AuthGuard]},
  {path:'teacher', component:TeacherComponent,canActivate:[AuthGuard]},
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
    DashboardComponent,
    TestsComponent,
    AddtestsComponent,
    QuestionsComponent,
    StudenthomeComponent,
    TeacherhomeComponent,
    AdminhomeComponent,
    TaketestComponent,
    SubjectComponent,
    GetmarksComponent,
    AddteacherComponent,
    TeacherComponent,
    StudentnavComponent,
    AdminnavComponent,
    TeachernavComponent,
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
    AuthGuard,TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
