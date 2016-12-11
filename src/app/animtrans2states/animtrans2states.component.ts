import { Component, Input, trigger, state, style, transition, animate } from '@angular/core';
import { HeroesAnimationsService } from '../heroesanimations.service';


@Component({
  selector: 'app-animtrans2states',
  template: `
  <ul class="center-screen">
      <li *ngFor="let hero of heroes" [@heroState]="hero.state" (click)="hero.toggleState()">
      {{hero.name}}
      </li>
  </ul>
  `,
  styleUrls: ['./animtrans2states.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(2)'
      })),
      transition('inactive <=> active', animate('500ms ease-in'))
    ])
  ]
})
export class AnimTrans2StatesComponent {
  heroes;
  constructor(public heroesAnimationsService: HeroesAnimationsService) {
    console.log(heroesAnimationsService.getAll().splice(5));
    this.heroes = heroesAnimationsService.getAll();
   }


}
