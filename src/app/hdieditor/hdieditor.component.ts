import { Component, EventEmitter, Input, Output } from '@angular/core';

import { HdiRestoreService } from '../hdirestore.service';
import { HdiHero } from '../hdihero';

@Component({
  selector: 'app-hdieditor',
  providers: [HdiRestoreService],
  template: `
  <div>
        <span>Name</span>
        <input [(ngModel)]="hero.name" />
        <div>
        <button (click)="onSaved()">save</button>
        <button (click)="onCancelled()">cancel</button>
        </div>
  </div>
  `
})
export class HdiEditorComponent {
      @Output() cancelled = new EventEmitter<HdiHero>();
      @Output() saved = new EventEmitter<HdiHero>();

      constructor(private hdiRestoreService: HdiRestoreService<HdiHero>){}

      @Input()
      set hero(hero: HdiHero){
          this.hdiRestoreService.setItem(hero);
      }
      get hero() {
        return this.hdiRestoreService.getItem();
      }
      onSaved(){
        this.saved.emit(this.hdiRestoreService.getItem());
      }
      onCancelled() {
        this.hero = this.hdiRestoreService.restoreItem();
        this.cancelled.emit(this.hero);
      }


}
