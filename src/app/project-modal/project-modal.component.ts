import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../_models/Project';
declare var bulmaCarousel: any;

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss'
})
export class ProjectModalComponent implements OnInit{
  @Input() project = {} as Project;

  @Output()
  onClose = new EventEmitter();

  constructor() { }
  ngOnInit() {
  }

  ngAfterViewInit() {
    if(this.project.pictures.length > 1) {
      bulmaCarousel.attach('.carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        navigation: true,
        }
      )
    }
  }

  cancel() { this.onClose.emit(null); }
}
