import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  title: string = '';
  description: string = '';
  date: string = '';
  todoId: number | undefined; // Ensure the type is number or undefined
  successMessage = '';
  errorMessage = '';

  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    // Check if the route has an ID for editing
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.todoId = +params['id']; // Ensure the ID is converted to a number using the unary plus
        this.loadTodo(); // Load the data for the existing Todo
      }
    });
  }

  // Load the existing Todo by ID
  loadTodo() {
    if (this.todoId) {
      this.todoService.getTodos().subscribe(todos => {
        const todo = todos.find(t => t.id === this.todoId); // Ensure the `id` is a number here as well
        if (todo) {
          this.title = todo.title;
          this.description = todo.description;
          this.date = todo.date;
        }
      });
    }
  }

  // Add or update a Todo based on whether `todoId` exists
  saveTodo() {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.title.trim() && this.description.trim() && this.date.trim()) {
      const todoData = {
        title: this.title,
        description: this.description,
        date: this.date,
        completed: false
      };

      if (this.todoId !== undefined) {
        // Update existing Todo
        this.todoService.updateTodo(this.todoId, todoData).subscribe(() => {
          // this.router.navigate(['/todo']); // Navigate back to the list
          // alert("update Successfuly")
          this.successMessage = 'Update successfully!';
          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
        });
      } else {
        // Create a new Todo
        this.todoService.addTodo(todoData).subscribe(() => {
          // this.router.navigate(['/todo']); // Navigate back to the list
          // window.alert("New todo add");
          // this.toastr.success("Login Successful!", "Success");
          this.successMessage = 'Add successfully!';
          setTimeout(() => {
            this.successMessage = '';
          }, 3000);

        });
      }
    }
  }
}
