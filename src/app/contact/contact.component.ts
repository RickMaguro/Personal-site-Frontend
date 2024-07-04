import { Component, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  loading: boolean = false;

  constructor(private http: HttpClient, private router: Router, private elementRef: ElementRef) {}

  submitForm() {
    const emailData = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    // Endpoint URL
    const endpoint = `${environment.apiEndpoint}/send-email`;

    this.loading = true; // Set loading state to true
    this.elementRef.nativeElement.querySelector('.button').classList.add('is-loading'); // Add is-loading class

    this.http.post(endpoint, emailData)
      .subscribe({
        next: response => {
          console.log('Email sent successfully!', response);
          this.router.navigate(['/emailconfirmation']);
        },
        error: error => {
          console.error('Failed to send email', error);
          alert('Sorry, something went wrong. Please try again later.');
        },
        complete: () => {
          this.loading = false; // Set loading state to false regardless of success or error
          this.elementRef.nativeElement.querySelector('.button').classList.remove('is-loading'); // Remove is-loading class
        }
      });
  }
}
