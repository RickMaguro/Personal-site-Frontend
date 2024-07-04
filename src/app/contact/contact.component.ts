import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  submitForm() {
    const emailData = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    // Endpoint URL - Change to your server's URL when deployed
    const endpoint = 'http://localhost:3000/send-email';

    this.http.post(endpoint, emailData)
      .subscribe({
        next: response => {
          console.log('Email sent successfully!', response);
          this.router.navigate(['/emailconfirmation']);
        },
        error: error => {
          console.error('Failed to send email', error);
          alert('Sorry, something went wrong. Please try again later.');
        }
      });
  }
}
