import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private titleService: Title, private metaService: Meta) { }
  setMetaData(
    title: string,
    description: string,
    keywords: string,
    author: string,
    subject: string,
    copyright: string,
    publisher: string,
    robots: string,
    googlebot: string,
    rating: string,
    distribution: string,
    contentType: string,
    contentLanguage: string
  ) {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'description', content: description });
    this.metaService.updateTag({ name: 'keywords', content: keywords });
    this.metaService.updateTag({ name: 'author', content: author });
    this.metaService.updateTag({ name: 'subject', content: subject });
    this.metaService.updateTag({ name: 'copyright', content: copyright });
    this.metaService.updateTag({ name: 'publisher', content: publisher });
    this.metaService.updateTag({ name: 'robots', content: robots });
    this.metaService.updateTag({ name: 'googlebot', content: googlebot });
    this.metaService.updateTag({ name: 'rating', content: rating });
    this.metaService.updateTag({ name: 'distribution', content: distribution });
    this.metaService.updateTag({ 'http-equiv': 'Content-Type', content: contentType });
    this.metaService.updateTag({ 'http-equiv': 'Content-Language', content: contentLanguage });
  }
}
