import { Component, Input } from '@angular/core';
import { HeroComponentStyles } from '../herocomponentstyles';
@Component({
  selector: 'app-componentstyles-main',
  template: `
  <app-quest-summary></app-quest-summary>
  <app-componentstylesdetails [hero]=hero [class.active]=hero.active>
  <app-componentstylescontrols [hero]=hero></app-componentstylescontrols>
  </app-componentstylesdetails>
  `,
  styleUrls: ['./componentstyles-main.component.css']
})
export class ComponentStylesMainComponent {
    @Input() hero: HeroComponentStyles;


}
