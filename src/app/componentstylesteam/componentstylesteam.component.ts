import { Component, Input } from '@angular/core';
import { HeroComponentStyles } from '../herocomponentstyles';

@Component({
  selector: 'app-componentstylesteam',
  template: `
  <link rel="stylesheet" href="app/componentstylesteam/componentstylesteam.component.css">
  <h3>Team</h3>
  <ul>
      <li *ngFor="let member of hero.team">
      {{member}}
      </li>
  </ul>
  `,
})
export class ComponentStylesHeroTeamComponent {
    @Input() hero: HeroComponentStyles;

}
