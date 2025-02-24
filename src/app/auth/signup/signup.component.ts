import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signUpForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  signUp() {
    this.successMessage = '';
    this.errorMessage = '';

    if (this.signUpForm.valid) {
      const user = this.signUpForm.value;
      this.authService.signUp(user).subscribe(
        (response) => {
          this.router.navigate(['/auth/login']);

          this.successMessage = ' successfully Signup !';
          setTimeout(() => {
            this.successMessage = '';
          }, 3000);
        },
        (error) => {
          console.error('Signup error:', error);
          alert('Signup failed: ' + (error.message || error));
        }
      );
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
