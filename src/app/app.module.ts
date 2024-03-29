import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { TutorComponent } from './tutor/tutor.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ClassComponent } from './class/class.component';
import { LoginComponent } from './login/login.component';
import { SubjectComponent } from './subject/subject.component';
import { IssueComponent } from './issue/issue.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';



const routes : Routes =[
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutusComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tutor',
    component: TutorComponent
  },
  {
    path:"class",
    component: ClassComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"subject",
    component: SubjectComponent
  },
  {
    path:"issue_detail",
    component: IssueDetailComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    TutorComponent,
    AboutusComponent,
    PagenotfoundComponent,
    ClassComponent,
    LoginComponent,
    SubjectComponent,
    IssueComponent,
    IssueDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
