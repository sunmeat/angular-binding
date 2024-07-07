import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { HeaderComponent } from './header/header.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactInfoComponent, HeaderComponent, PersonalInfoComponent, SkillsComponent, WorkExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'resume';
}