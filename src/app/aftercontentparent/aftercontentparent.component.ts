import { Component } from '@angular/core';

import { LchLoggerService } from '../lchlogger.service';

@Component({
  selector: 'app-aftercontentparent',
  template: `
            <div class="parent">
            <h2>After Content</h2>
            <div *ngIf="show"> ` +
            `
            <app-aftercontent>
                          <app-makechild></app-makechild>
            </app-aftercontent>`
           + `</div>

           <h4>-- AfterContent Logs --</h4>
           <p><button (click)="reset()">Reset</button></p>
           <div *ngFor="let msg of logs">{{msg}}</div>
          </div> 
  `,
  styles: ['.parent {background: #08FB15}'],
  providers: [LchLoggerService]
})
export class AfterContentParentComponent {
  logs: string[];
  show = true;

  constructor(private logger: LchLoggerService) {
    this.logs = logger.logs;
   }

   reset() {
     this.logs.length = 0;
     //quickly remove and reload AfterContentComponent which recreates it
     this.show = false;
     this.logger.tick_then(() => this.show = true);
   }

}
