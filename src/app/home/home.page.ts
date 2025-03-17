import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit{

  constructor(private metaService: MetaService) {}

  ngOnInit() {
    this.metaService.setMetaData(
      'Vincent Grande',
      'Développeur web et applications junior. Titulaire du master Manager en ingénierie informatique fraichement acquis, je suis prêt à mettre en oeuvre mes compétences en informatique pour réaliser vos projets !',
      'Vincent Grande, SIO, CDA, M2I, developpeur, programmation, étudiant, strasbourg, CCI, campus',
      'Vincent Grande',
      'Vincent Grande',
      'Vincent Grande',
      'Vincent Grande',
      'all',
      'all',
      'general',
      'global',
      'UTF-8',
      'fr'
    );
  }
}
