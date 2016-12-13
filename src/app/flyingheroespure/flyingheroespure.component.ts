import { Component } from '@angular/core';

import { HEROESTELEPORT } from '../heroesteleport';

@Component({
  selector: 'app-flyingheroespure',
  templateUrl: './flyingheroespure.component.html',
  styles: ['#teleporters, #all {font-style: italic;}']
})
export class FlyingHeroesPureComponent {
  heroes: any[] = [];
  canTeleport = true;
  mutate = true;
  title = 'Teleporting Heroes (pure pipe)';
  
  constructor() { this.reset(); }

  addHero(name: string){
    name = name.trim();
    if (!name) { return; }
    let hero = { name, canTeleport: this.canTeleport };
    if (this.mutate) {
      //pure pipe won't update the display because heroes array reference
      //is unchanged, impure pipe will display
      this.heroes.push(hero);
    } else {
      //pipe updates display because heroes array is a new object
      this.heroes = this.heroes.concat(hero);
    }
  }
  reset() { this.heroes = HEROESTELEPORT.slice(); }
}
