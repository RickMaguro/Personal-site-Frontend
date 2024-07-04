import { Component } from '@angular/core';
import {faGithub,faLinkedin,faBitbucket} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faBitbucket = faBitbucket
}
