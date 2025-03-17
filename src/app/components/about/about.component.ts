import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [ExperienceCardComponent, CommonModule, SkillsComponent, TranslateModule],
})
export class AboutComponent implements OnInit {
  experiences: any[] = [];
  educations: any[] = [];
  skills: string[] = [];

  constructor(private apiService: ApiService, private translate: TranslateService) {}

  ngOnInit() {
    this.loadData();

    this.translate.onLangChange.subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this.apiService.getData().subscribe((data: any) => {
      this.experiences = data.experiences;
      this.educations = data.education;
      this.skills = data.skills;
    });
  }
}