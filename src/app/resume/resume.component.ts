import { Component, TemplateRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faAngleDown, faMinus, faDatabase } from '@fortawesome/free-solid-svg-icons';
import {faAngular, faHtml5, faCss3Alt, faJs, faJava, faPython, faUnity} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements AfterViewInit{
  constructor(private titleService: Title, private cdr: ChangeDetectorRef) {
    this.titleService.setTitle("Wei Yu Chang - Resume");
  }

  items = [
    { title: 'Work Experience', isActive: false, template: null as TemplateRef<any> | null },
    { title: 'Education', isActive: false, template: null as TemplateRef<any> | null },
    { title: 'Skills', isActive: true, template: null as TemplateRef<any> | null }
  ];

  @ViewChild('template1') template1!: TemplateRef<any>;
  @ViewChild('template2') template2!: TemplateRef<any>;
  @ViewChild('template3') template3!: TemplateRef<any>;

  ngAfterViewInit() {
    // Assign templates to items after view initialization
    this.items[0].template = this.template1;
    this.items[1].template = this.template2;
    this.items[2].template = this.template3;
    this.cdr.detectChanges();  // Trigger change detection
  }

  toggleAccordion(index: number): void {
    this.items[index].isActive = !this.items[index].isActive;
  }

  // Icon
  faAngleDown = faAngleDown;
  faMinus = faMinus;
  faAngular = faAngular;
  faHtml5 = faHtml5;
  faCss3Alt = faCss3Alt;
  faJs = faJs;
  faJava = faJava;
  faPython = faPython;
  faDatabase = faDatabase;
  faUnity = faUnity;
}
