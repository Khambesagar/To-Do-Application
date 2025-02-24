
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`).pipe(
      map(users => {
        if (users.length > 0) {
          const user = users[0];
          // Simulate token generation (in a real app, you would use JWT)
          const token = 'sample-token';
          localStorage.setItem('token', token);
          return { token, user };
        } else {
          throw new Error('Invalid credentials');
        }
      }),
      catchError((error) => {
        throw new Error(error.message || 'Login failed');
      })
    );
  }

  signUp(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
