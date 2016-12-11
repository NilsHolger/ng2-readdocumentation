import { Component, Input } from '@angular/core';
import { HeroComponentStyles } from '../herocomponentstyles';

@Component({
  selector: 'app-componentstylesdetails',
  template: `
      <h2>{{hero.name}}</h2>
      <app-componentstylesteam [hero]="hero"></app-componentstylesteam>
      <ng-content></ng-content>
  `,
  styleUrls: ['./componentstylesdetails.component.css']
})
export class ComponentStylesDetailsComponent {
  @Input() hero: HeroComponentStyles;

  constructor() { }


}
