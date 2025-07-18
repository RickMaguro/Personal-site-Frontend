import { Component } from '@angular/core';
import { faGithub, faLinkedin, faBitbucket } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] 
})
export class HeaderComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faBitbucket = faBitbucket;

  ngAfterViewInit(): void {
    // Make sure the burger menu is working on the browser
    if (typeof document !== 'undefined') {
      const burger = document.querySelector('.navbar-burger');
      const menu = document.querySelector('.navbar-menu');
      const navItems = document.querySelectorAll('.navbar-item');
  
      // Switch the burger menu
      burger?.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        menu?.classList.toggle('is-active');
      });
  
      // When each page is clicked, close the menu
      navItems.forEach((item) => {
        item.addEventListener('click', () => {
          if (burger?.classList.contains('is-active')) {
            burger.classList.remove('is-active');
            menu?.classList.remove('is-active');
          }
        });
      });
    }
  }
}