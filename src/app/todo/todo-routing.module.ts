import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import components
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoItemComponent } from './todo-item/todo-item.component';


const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'add', component: TodoFormComponent },
  { path: 'edit/:id', component: TodoFormComponent  }, // Add edit route

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}

