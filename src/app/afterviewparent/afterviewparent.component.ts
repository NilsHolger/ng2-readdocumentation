import { AfterViewChecked, AfterViewInit, Component, ViewChild } from '@angular/core';
import { AfterViewComponent } from '../afterview/afterview.component';

import { LchLoggerService } from '../lchlogger.service';

@Component({
  selector: 'app-afterviewparent',
  template: `
            <div>-- child view begins --</div>
            <app-afterview></app-afterview>
            <div>-- child view ends --</div>
            `
            + ` <p *ngIf="comment" class="comment">
                      {{comment}}
                </p>
            `
})
export class AfterViewParentComponent implements AfterViewChecked, AfterViewInit {
        private prevHero = '';

        //query for a VIEW child of type `AfterViewComponent`
        @ViewChild(AfterViewComponent) viewChild: AfterViewComponent

  constructor(private logger: LchLoggerService) { this.logIt('AfterViewInit');   }

  ngAfterViewInit() {
        //viewChild is set after the view has been initialized
        this.logIt('AfterViewInit');
        this.doSomething();
  }
  ngAfterViewChecked() {
        //viewChild is updated after the view has been checked
        if (this.prevHero === this.viewChild.hero){
            this.logIt('AfterViewChecked (no change)');
        } else {
          this.prevHero = this.viewChild.hero;
          this.logIt('AfterViewChecked');
          this.doSomething();
        }
  }

  private logIt(method: string){
    let child = this.viewChild;
    let message = `${method}: ${child ? child.hero : 'no'} child view`;
    this.logger.log(message);
  }

  comment = '';

  //This surrogate for real business logic sets the `comment`
  private doSomething() {
    let comment = this.viewChild.hero.length > 10 ? `That's a long name` : '';
    if (comment !== this.comment){
      //Wait a tick because the component's view has already been checked
      this.logger.tick_then(() => this.comment = comment);
    }
  }



}
