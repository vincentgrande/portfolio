import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [TranslateModule, CommonModule], // Importez CommonModule ici
})
export class SkillsComponent {
  @Input() skills: string[] = [];
}