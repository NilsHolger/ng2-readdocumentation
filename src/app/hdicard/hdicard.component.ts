import { Component, Input } from '@angular/core';
import { HdiHero } from '../hdiHero';

@Component({
  selector: 'app-hdicard',
  template: `
  <div>
    <span>Name:</span>
    {{hero.name}}
  </div>
  `
})
export class HdiCardComponent {
    @Input() hero: HdiHero;
}
