import { Component, ViewChild } from '@angular/core';
import { OnChangesComponent } from '../onchanges/onchanges.component';
import { Hero } from '../heroesgrow';

@Component({
  selector: 'app-onchangesparent',
  templateUrl: './onchangesparent.component.html',
  styles: ['.parent {background: Lavender;}']
})
export class OnChangesParentComponent {
  hero: Hero;
  power: string;
  title: string;
  @ViewChild(OnChangesComponent) private childView: OnChangesComponent;
  constructor() { this.title = 'OnChanges'; this.reset()}

  reset() {
    //new hero object every time; triggers onChanges
    this.hero = new Hero('NG Open Source Heroes');
    //setting power only triggers onchanges if this value is different
    this.power = 'humble';
    if (this.childView) {this.childView.reset();}
  }
}
