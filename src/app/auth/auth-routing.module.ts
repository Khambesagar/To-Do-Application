import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },  // Route for login
  { path: 'signup', component: SignupComponent } // Route for signup
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Import routes using forChild for lazy-loaded modules
  exports: [RouterModule]
})
export class AuthRoutingModule { }
