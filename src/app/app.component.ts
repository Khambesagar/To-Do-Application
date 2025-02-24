import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do Management System'; // The title of your app, can be changed
  isLoading = true;
  // cdr: any;

  constructor() {
    // Simulate an API call
    setTimeout(() => {
      this.isLoading = false;
      console.log("Loader hidden:", this.isLoading); // Debugging
      // this.cdr.detectChanges(); 
    }, 2000);
  }
}



