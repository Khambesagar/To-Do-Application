import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoaderComponent } from './loader/loader.component';

const routes: Routes = [
  {path:'loader', component: LoaderComponent},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)  // Lazy load AuthModule
  },
  {
    path: 'todo',
    canActivate: [AuthGuard],  // Protect Todo route with AuthGuard
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)  // Lazy load TodoModule
  },
   { path: '', redirectTo: '/auth/login', pathMatch: 'full' },  // Default route redirects to login
  // { path: '**', redirectTo: '/auth/login' }  // Wildcard route redirects to login if the route is not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configure routes for the app
  exports: [RouterModule]
})
export class AppRoutingModule { }
