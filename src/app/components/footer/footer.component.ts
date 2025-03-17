import { Component, OnInit } from '@angular/core';
import { IonFooter, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [IonFooter, IonToolbar, IonTitle,TranslateModule]
})
export class FooterComponent  implements OnInit {

  constructor(private scrollService: ScrollService) { }

  ngOnInit() {}

  scrollTo(id: string): void {
    this.scrollService.scrollTo(id);
  }

}
