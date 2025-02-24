import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

// Import the routing module
import { AuthRoutingModule } from './auth-routing.module';  // Import AuthRoutingModule

@NgModule({
  declarations: [
    LoginComponent,  // Login component for authentication
    SignupComponent  // Signup component for new user registration
  ],
  imports: [
    CommonModule,         // CommonModule for basic Angular functionality
    FormsModule,          // FormsModule for template-driven forms
    ReactiveFormsModule,  // ReactiveFormsModule for reactive forms
    AuthRoutingModule     // Import AuthRoutingModule for handling routes in AuthModule
  ]
})
export class AuthModule { 

}
