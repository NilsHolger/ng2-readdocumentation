import { Component } from '@angular/core';

import { LchLoggerService } from '../lchlogger.service';  

@Component({
  selector: 'app-afterviewparentparent',
  template: `
            <div class="parent">
            <h2>AfterView</h2>
            <app-afterviewparent *ngIf="show"></app-afterviewparent>
            
            <h4>-- AfterView Logs --</h4>
            <p><button (click)="reset()">Reset</button></p>
            <div *ngFor="let msg of logs">{{msg}}</div>
            </div>
  `,
  styles: ['.parent {background: burlywood}'],
  providers: [LchLoggerService]
})
export class AfterViewParentParentComponent {
  logs: string[]; 
  show = true;

  constructor(private logger: LchLoggerService) { this.logs = logger.logs;}

  reset() {
    this.logs.length = 0;
    //quickly remove and reload AfterViewParentComponent which recreates it
    this.show = false;
    this.logger.tick_then(() => this.show = true);
  }

}
