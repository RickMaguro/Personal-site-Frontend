import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  @Input() project = {} as Project;
  


  showModal: boolean = false;
  selectItem() {
    this.showModal = true;  
  }
  closeModal() {
    this.showModal = false;
  }
}
