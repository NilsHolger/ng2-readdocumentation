import { Injectable } from '@angular/core';


class Hero {
  constructor(public name: string, 
              public state: string = 'inactive'){}

toggleState(){
  this.state = (this.state === 'active') ? 'inactive' : 'active';
}
}

const ALL_HEROES = [
    	'Angular',
      'Ionic',
      'Material Design',
      'Firebase',
      'Android',
      'Blitzkrieg',
      'Flash',
      'Superman',
      'Mr. Nice',
      'Green Arrow',
      'Batman'
      
].map(name => new Hero(name));

@Injectable()
export class HeroesAnimationsService implements Iterable<Hero>{
  currentHeroes: Hero[] = [];
  [Symbol.iterator]() {
    return this.currentHeroes.values();
  }
  getAll() {
    return ALL_HEROES;
  }
  canAdd() {
    return this.currentHeroes.length < ALL_HEROES.length;
  }
  canRemove() {
    return this.currentHeroes.length > 0;
  }
  addActive() {
    let hero = ALL_HEROES[this.currentHeroes.length];
    hero.state = 'active';
    this.currentHeroes.push(hero);
  }
  addInactive() {
    let hero = ALL_HEROES[this.currentHeroes.length];
    hero.state = 'inactive';
    this.currentHeroes.push(hero);
  }
  remove() {
    this.currentHeroes.splice(this.currentHeroes.length - 1, 1);
  }


}
