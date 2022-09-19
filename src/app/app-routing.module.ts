import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { LoginComponent } from './auth/login/login.component';
import { AdminBlogComponent } from './blog/admin/admin.component';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { TheBlogPageComponent } from './blog/the-blog-page/the-blog-page.component';



const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "blog", component: BlogPageComponent},
  {path: "blog/my-best-blog", component: TheBlogPageComponent},
  {path: "admin/blog", component: AdminBlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
