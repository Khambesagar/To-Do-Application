
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Import form modules
import { HttpClientModule } from '@angular/common/http';
// Import components
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

// Import the service
import { TodoService } from './todo.service';
import { TodoRoutingModule } from './todo-routing.module'; // Import routing
import { SearchComponent } from '../shared/search/search.component';

@NgModule({
  declarations: [
    TodoListComponent,  // Component to display the list of to-dos
    TodoFormComponent,  // Component for adding/editing to-dos
    TodoItemComponent ,  // Component for each individual to-do item
    SearchComponent
  ],
  imports: [
    CommonModule,         // CommonModule for basic Angular directives
    FormsModule,          // FormsModule for template-driven forms
    ReactiveFormsModule,   // ReactiveFormsModule for more control over forms
    TodoRoutingModule, // Add routing here
    HttpClientModule
  ],
  providers: [
    TodoService           // TodoService to interact with backend or db.json
  ]
})
export class TodoModule { }