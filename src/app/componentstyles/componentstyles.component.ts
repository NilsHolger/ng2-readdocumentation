import { Component, HostBinding } from '@angular/core';
import { HeroComponentStyles } from '../herocomponentstyles';

@Component({
  selector: 'app-componentstyles',
  template: `
  <h1>Tour of Heroes</h1>
  <app-componentstyles-main [hero]=hero></app-componentstyles-main>
  `,
  styles: ['h1 { font-weight: normal; }']
})
export class ComponentStylesComponent {
  hero = new HeroComponentStyles(
      'Angular',
      ['Ionic', 'Material Design', 'Firebase', 'Android', 'Blitzkrieg']
  );

  @HostBinding('class') get themeClass() {
    return 'theme-light';
  }

}
