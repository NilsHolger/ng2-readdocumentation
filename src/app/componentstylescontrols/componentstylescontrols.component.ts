import { Component, Input } from '@angular/core';
import { HeroComponentStyles } from '../herocomponentstyles';

@Component({
  selector: 'app-componentstylescontrols',
  template: `
  <style> button { background-color: white; border: 1px solid #777 } </style>
  <h3>Controls</h3>
  <button (click)="activate()">Activate</button>
  `,
  styleUrls: ['./componentstylescontrols.component.css']
})
export class ComponentStylesControlsComponent {
  @Input()
        hero: HeroComponentStyles;

        activate() {
          this.hero.active = true;
        }
  


}
