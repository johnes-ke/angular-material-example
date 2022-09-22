import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/main/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//material design module
import {MaterialDesignModule} from './material-design/material-design.module';

//pages components
import { LoginComponent } from './components/auth/login/login.component';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { SingleBlogPageComponent } from './blog/single-blog-page/single-blog-page.component';
import { TheBlogPageComponent } from './blog/the-blog-page/the-blog-page.component';
import { AdminBlogComponent } from './blog/admin/admin.component';
import { DeleteDialogComponent } from './components/dialogs/delete/delete-dialog.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//dashboard componets
import { InsuranceComponent } from './components/insurance/insurance.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { BrokerComponent } from './components/broker/broker.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogPageComponent,
    SingleBlogPageComponent,
    TheBlogPageComponent,
    AdminBlogComponent,
    DeleteDialogComponent,
    SideNavComponent,
    MainDashboardComponent,
    RegisterComponent,
    PageNotFoundComponent,
    InsuranceComponent,
    InboxComponent,
    BrokerComponent,
    ProfileComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
