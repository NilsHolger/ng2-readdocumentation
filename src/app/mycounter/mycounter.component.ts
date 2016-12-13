import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { LchLoggerService } from '../lchlogger.service';
@Component({
  selector: 'app-mycounter',
  template: `
  <div class="integer">
  Counter = {{counter}}

  <h5>-- Counter Change Log --</h5>
  <div *ngFor="let chg of changeLog" i3Spy>{{chg}}</div>
  </div>
  `,
  styles: ['.integer {background: LightYellow; padding: 8px; margin-top: 8px;}']
})
export class MyCounterComponent implements OnChanges  {
  @Input() counter: number;
  changeLog: string[] = [];

ngOnChanges(changes: SimpleChanges){
  //empty the changeLog whenever counter goes to zero
  //hint: this way we respond programmatically to external value changes
  if (this.counter === 0){
    this.changeLog.length = 0;
  }

  //a change to `counter` is the only change we care about
  let chng = changes['counter'];
  let cur = chng.currentValue;
  let prev = JSON.stringify(chng.previousValue); //first time is {}; after is integer
  this.changeLog.push(`counter: currentValue = ${cur}, previousValue = ${prev}`); 
}
}
