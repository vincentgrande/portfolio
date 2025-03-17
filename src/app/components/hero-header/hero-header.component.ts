import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-header',
  templateUrl: './hero-header.component.html',
  styleUrls: ['./hero-header.component.scss'],
  standalone: true,
  imports: [TranslateModule]
})
export class HeroHeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
