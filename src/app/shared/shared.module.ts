import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import shared components
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { FormsModule } from '@angular/forms';
import { SharedRoutingModule } from './shared-routing.module';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    HeaderComponent,  // Header component for navigation and branding
    LoaderComponent,
     ContactComponent
  ],
  imports: [
    CommonModule,  // CommonModule for Angular's basic directives like ngIf, ngFor
    FormsModule,
    SharedRoutingModule  // Import here Routing 
   
  ],
  exports: [
    HeaderComponent,  // Export components for use in other modules
    LoaderComponent,
    ContactComponent
    // SearchComponent
  ]
})
export class SharedModule { }
