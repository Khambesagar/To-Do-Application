
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
saveTodo() {
throw new Error('Method not implemented.');
}
  @Input() todo: any;
todoId: any;
title: any;
description: any;
date: any;

  constructor(private todoService: TodoService, private router: Router) {}

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe();
  }

  editTodo(todo: any) {
    this.router.navigate(['/todo/edit', todo.id]); // Navigate to edit page with ID
  }

}
