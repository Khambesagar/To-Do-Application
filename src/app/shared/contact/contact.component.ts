import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = { name: '', email: '', message: '' };
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';
  private formspreeEndpoint = 'https://formspree.io/f/mwpkjvnd'; // Replace with your Formspree endpoint

  constructor(private http: HttpClient ) {} //, private toastr: ToastrService

  submitForm() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.errorMessage = 'All fields are required.';
      setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
      return;
    }

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.http.post(this.formspreeEndpoint, this.formData).subscribe(
      response => {
        this.successMessage = 'Message sent successfully!';
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      
        // this.toastr.success('Message sent successfully!', 'Success');
        this.formData = { name: '', email: '', message: '' };
        this.isSubmitting = false;
      },
      error => {
        this.errorMessage = 'Error sending message. Try again.';
   
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
        // this.toastr.error('Error sending message. Try again.', 'Error');
        
        this.isSubmitting = false;
      }
    );
  }
}
