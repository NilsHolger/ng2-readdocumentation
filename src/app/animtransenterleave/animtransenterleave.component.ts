import {animate, Component, Input, state, style, transition, trigger} from '@angular/core';

import {HeroesAnimationsService} from '../heroesanimations.service';

@Component({
  selector: 'app-animtransenterleave',
  template: `
  <ul>
      <li *ngFor="let hero of heroes" [@flyInOut]="'in'">
      {{hero.name}}
      </li>
  </ul>
  `,
  styleUrls: ['./animtransenterleave.component.css'],
  animations: [trigger(
      'flyInOut',
      [
        state(
            'in',
            style({transform: 'translateX(0)'})),
            transition('void => *', [
              style({transform: 'translateX(1000%)'}),
              animate(5000)
            ]),
            transition('* => void', [
              animate(100, style({transform: 'translateX(100%)'}))
            ])  
      ])]
})
export class AnimTransEnterLeaveComponent {
  heroes;
  constructor(public heroesAnimationsService: HeroesAnimationsService) {
    console.log(heroesAnimationsService.getAll().splice(5));
    this.heroes = heroesAnimationsService.getAll();
  }
}
