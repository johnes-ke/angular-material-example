import { Injectable, NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';

//top level components
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//dashboard components
import { InsuranceComponent } from './components/insurance/insurance.component';
import { AdminBlogComponent } from './blog/admin/admin.component';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { TheBlogPageComponent } from './blog/the-blog-page/the-blog-page.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { BrokerComponent } from './components/broker/broker.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent
  },
  {
    path: 'register',
    title: 'Register', 
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    title: 'Dashboard', 
    component: MainDashboardComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'insurance',   // child route path
        title: 'Insurance', 
        component: InsuranceComponent, // child route component that the router renders
      },
      {
        path: 'blog',
        title: 'Blog', 
        component: BlogPageComponent
      },
      {
        path: 'blog-details',
        title: 'Blog Details', 
        component: TheBlogPageComponent},
      {
        path: 'admin/blog',
        title: 'Admin Blogs', 
        component: AdminBlogComponent
      },
      {
        path: 'inbox',
        title: 'Inbox', 
        component: InboxComponent
      },
      {
        path: 'broker',
        title: 'Admin Blogs', 
        component: AdminBlogComponent
      }
    ],
  },
  {
    path: '',              // redirect to the default component
    redirectTo: '/login', 
    pathMatch: 'full' 
  }, 
  { 
    path: '**',            // Wildcard route for a 404 page
    component: PageNotFoundComponent
  },  
];

@Injectable({providedIn: 'root'})

//Implementing Custome Title in the Browser
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`My Application | ${title}`);
    }
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
})

export class AppRoutingModule {}
