import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss'],
  standalone: true,
})
export class ExperienceCardComponent implements OnInit {
  @Input() experience: any;
  @Input() type: string = 'experience';
  title: string = '';
  description: string = '';
  date: string = '';
  dateClass: string = 'text-primary';

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    const lang = this.translate.currentLang;
    this.title = this.experience[`title_${lang}`];
    this.description = this.experience[`description_${lang}`];
    this.date = this.experience[`date_${lang}`];
    this.dateClass = this.type === 'experience' ? 'text-primary' : 'text-secondary';
  }
}