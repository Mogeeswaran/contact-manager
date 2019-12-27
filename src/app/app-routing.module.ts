import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemoComponent} from './demo/demo.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AboutComponent } from './about/about.component';

// Step- 3 setting up routes
const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'demo', component:DemoComponent, canActivate: [ AuthGuard ] },
  { path:'login', component:LoginComponent },
  { path:'signup', component:SignupComponent },
  { path: 'about', component: AboutComponent},
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Step-4 registering the routes configurations
  exports: [RouterModule]
})
export class AppRoutingModule { }
