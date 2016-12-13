import { Pipe, PipeTransform } from '@angular/core';
import { Teleporter } from './heroesteleport';

@Pipe({
  name: 'teleportingHeroes'
})
export class TeleportingHeroesPipe implements PipeTransform {
  transform(allHeroes: Teleporter[]) {
    console.log('IN PIPE ' + allHeroes);
    return allHeroes.filter(hero => hero.canTeleport);
  }
}

@Pipe({
  name: 'teleportingHeroesImpure',
  pure: false
})
export class TeleportingHeroesPipeImpure extends TeleportingHeroesPipe {}
