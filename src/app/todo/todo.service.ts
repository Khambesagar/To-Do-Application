import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

    getTodoById(todoId: any) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = 'http://localhost:3000/todos'; 

  constructor(private http: HttpClient) {}
  
  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addTodo(todo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, todo);
  }

  updateTodo(id: number, todo: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, todo); // ✅ Ensure ID is a number
  }
  
  
  deleteTodo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}


