

import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];
  filteredTodos: any[] = [];

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
      this.filteredTodos = todos;
    });
  }

  deleteTodo(id: number) {
    const confirmation = window.confirm('Are you sure you want to delete this Todo?');
    if (confirmation) {
      this.todoService.deleteTodo(id).subscribe(() => {
        this.loadTodos();
      });
    }
  }
  
  editTodo(id: number) {
    this.router.navigate(['/todo/edit', id]);
  }

  onSearchTermChanged(searchTerm: string) {
    this.filteredTodos = this.todos.filter(todo =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
