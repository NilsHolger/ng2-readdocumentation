import { Component, } from '@angular/core';

import { EditItem } from '../edititem';
import { HdiHeroesService } from '../hdiheroes.service';
import { HdiHero } from '../hdiHero';

@Component({
  selector: 'app-hierarchicaldependencyinjectorslist',
  template: `
  <div>
    <ul>
      <li *ngFor="let editItem of heroes">
      <app-hdicard [hidden]="editItem.editing" [hero]="editItem.item"></app-hdicard>
      <button [hidden]="editItem.editing" (click)="editItem.editing = true">
      edit
      </button>
      <app-hdieditor (saved)="onSaved(editItem, $event)" (canceled)="onCanceled(editItem)"
      [hidden]="!editItem.editing" [hero]="editItem.item"></app-hdieditor>
      </li>
    </ul>
  </div>
  `, 
  styleUrls: ['./hierarchicaldependencyinjectorslist.component.css']
})
export class HierarchicalDependencyInjectorsListComponent {
        heroes: Array<EditItem<HdiHero>>;
        constructor(hdiHeroesService: HdiHeroesService){
          this.heroes = hdiHeroesService.getHeroes().map(item => new EditItem(item));
        }
        onSaved(editItem: EditItem<HdiHero>, updatedHero: HdiHero){
              editItem.item = updatedHero;
              editItem.editing = false; 
        }
        onCancelled(editItem: EditItem<HdiHero>){
          editItem.editing = false;
        }
}
