import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components

import { LoginComponent } from '../auth/login/login.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  {path : 'shared/email', component : ContactComponent},
  { path: 'auth/login', component: LoginComponent }, // Route for adding a todo
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
