import {Component} from '@angular/core';

import {LchLoggerService} from '../lchlogger.service';

@Component({
  selector: 'app-counterparent',
  template: `
  <div class="medal">
  <h2>Counter Spy</h2>

  <button (click)="updateCounter()">Update Counter</button>
  <button (click)="reset()">Reset Counter</button>
  
  <app-mycounter [counter]="value"></app-mycounter>

  <h4>-- Spy Lifecycle Hook Log --</h4>
  <div *ngFor="let msg of spyLog">{{msg}}</div>
  </div>
  `,
  styles: ['.medal {background: gold;}'],
  providers: [LchLoggerService]
})
export class CounterParentComponent {
  value: number;
  spyLog: string[] = [];

  private logger: LchLoggerService;
  constructor(logger: LchLoggerService) {
    this.logger = logger;
    this.spyLog = logger.logs;
    this.reset()
  }
  updateCounter() {
    this.value += 1;
    this.logger.tick();
  }
  reset() {
    this.logger.log('--- reset ---');
    this.value = 0;
    this.logger.tick();
  }
}
