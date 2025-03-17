import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButton } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonButton, TranslateModule]
})
export class HeaderComponent  implements OnInit {
  constructor(public translate: TranslateService, private scrollService: ScrollService) { 
  }

  ngOnInit() {}

  scrollTo(id: string): void {
    this.scrollService.scrollTo(id);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }


}
