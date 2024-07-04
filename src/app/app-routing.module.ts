import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { EmailconfirmationComponent } from './emailconfirmation/emailconfirmation.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path:'resume', component: ResumeComponent},
  {path:'contact', component: ContactComponent},
  {path:'emailconfirmation', component: EmailconfirmationComponent},
  
  // Go to Home page if path is typed wrongly or randomly
  {path:'**', component: HomeComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
