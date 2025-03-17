import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en'); // Langue par défaut
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang && browserLang.match(/en|fr/) ? browserLang : 'fr');

  }
}
