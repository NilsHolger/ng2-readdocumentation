import { AfterContentChecked, AfterContentInit, Component, ContentChild } from '@angular/core';
import { MakeChildComponent } from '../makechild/makechild.component';
import { LchLoggerService } from '../lchlogger.service';


@Component({
  selector: 'app-aftercontent',
  template: `
            <div>-- PROJECTed content begins (wrapit) --</div>
                    <ng-content></ng-content>
            <div>-- PROJECTed content ends            --</div>`
            + `
                <p *ngIf="comment" class="comment">
                        {{comment}}
                </p>
            `
})
export class AfterContentComponent implements AfterContentChecked, AfterContentInit {
  private prevTarget = '';
  comment = '';
  
  //Query for CONTENT child of type `MakeChildComponent`
  @ContentChild(MakeChildComponent) contentChild: MakeChildComponent;

  constructor(private logger: LchLoggerService) { this.logIt('AfterContent constructor'); }

  ngAfterContentInit() {
    //contentChild is set after the content has been initialized
    this.logIt('AfterContentInit');
    this.doSomething();
  }

  ngAfterContentChecked() {
    //contentChild is updated after the content has been checked
    if (this.prevTarget === this.contentChild.target){
          this.logIt('AfterContentChecked (no change)');
    } else {
        this.prevTarget = this.contentChild.target;
        this.logIt('AfterContentChecked');
        this.doSomething();
    }
  }

  private logIt(method: string){
        let target = this.contentChild;
        let message = `${method}: ${target ? target.target : 'no' } target content`;
        this.logger.log(message);
  }

  //This surrogate for real business logic sets the `comment`
  private doSomething() {
          this.comment = this.contentChild.target.length > 10 ? `that\'s A ing target` : '';
  }

}
