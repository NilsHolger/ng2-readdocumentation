import { Component } from '@angular/core';
import { FlyingHeroesPureComponent } from '../flyingheroespure/flyingheroespure.component';

@Component({
  selector: 'app-flyingheroesimpure',
  templateUrl: './flyingheroesimpure.component.html',
  styles: ['.teleporters, .all {font-style: italic;}']
})
export class FlyingHeroesImpureComponent extends FlyingHeroesPureComponent {
            title = 'Teleporting Heroes (impure pipe)';
}
