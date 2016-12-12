import { Component, ViewChild } from '@angular/core';
import { DoCheckComponent } from '../docheck/docheck.component';

import { Hero } from '../heroesgrow';

@Component({
  selector: 'app-docheckparent',
  templateUrl: './docheckparent.component.html',
  styles: ['.parent {background: Lavender}']
})
export class DoCheckParentComponent  {
  hero: Hero;
  power: string;
  title = 'DoCheck';
  @ViewChild(DoCheckComponent) private childView: DoCheckComponent

  constructor() { this.reset(); }

  reset() {
    this.hero = new Hero('WonderWoman');
    this.power = 'save the world';
    if (this.childView) { this.childView.reset(); }
  }
}
