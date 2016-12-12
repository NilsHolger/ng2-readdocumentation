import { Component } from '@angular/core';
import { LchLoggerService } from '../lchlogger.service';

@Component({
  selector: 'app-peekabooparent',
  template: `
  <div class="parent">
  <h2>Peek-A-Boo</h2>
  <button (click)="toggleChild()">
  {{hasChild ? 'Destroy' : 'Create'}} PeekABooComponent
  </button>
  <button (click)="updateHero()" [hidden]="!hasChild">Update Hero</button>

  <app-peekaboo *ngIf="hasChild" [name]="heroName"></app-peekaboo>

  <h4>-- Lifecycle Hook Log --</h4>
    <div *ngFor="let msg of hookLog">{{msg}}</div>
    </div>
  `,
  styles: ['.parent {background: moccasin}'],
  providers: [LchLoggerService]
})
export class PeekaBooParentComponent {
  hasChild = false;
  hookLog: string[];

  heroName = 'Flash';
  private logger: LchLoggerService;
  constructor(logger: LchLoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  toggleChild() {
      this.hasChild = !this.hasChild;
      if (this.hasChild){
        this.heroName = 'Flash';
        this.logger.clear(); //clear log on create
      }
      this.logger.tick();
  }
  updateHero() {
    this.heroName += '!';
    this.logger.tick();
  }
}
