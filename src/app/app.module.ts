import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Required for animations
import { ToastrModule } from 'ngx-toastr';

// Import modules
import { SharedModule } from './shared/shared.module';  // Import SharedModule for reusable components
import { AuthModule } from './auth/auth.module';        // Import AuthModule for authentication
import { TodoModule } from './todo/todo.module';
import { LoaderComponent } from './loader/loader.component';        // Import TodoModule for to-do functionalities

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,// Main root component
    // LoaderComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Import routing module
    HttpClientModule,  // Import HTTP client module for API calls
    FormsModule,       // Import FormsModule for template-driven forms
    ReactiveFormsModule, // Import ReactiveFormsModule for reactive forms
    SharedModule,      // Import SharedModule for reusable components
    AuthModule,        // Import AuthModule for authentication features
    TodoModule   ,      // Import TodoModule for todo-related features
   
    BrowserAnimationsModule, // Required for animations
    HttpClientModule, // Required for API calls
    ToastrModule.forRoot({
      positionClass: 'toast-top-right', // Ensure this is set
      timeOut: 3000, // Toast duration
      preventDuplicates: true,
      progressBar: true, // Optional, adds a progress bar
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]  // Bootstraps the AppComponent
})
export class AppModule { }
