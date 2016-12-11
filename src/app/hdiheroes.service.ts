import { HdiHero } from './hdiHero';

export class HdiHeroesService {
      heroes: Array<HdiHero> = [
            { name: 'RubberMan', power: 'flexibility'},
            { name: 'Lightning', power: 'searchAndDestroy'}
      ];    
      
      getHeroes() {
        return this.heroes;
      } 
}
