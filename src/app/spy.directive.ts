import { Directive, OnInit, OnDestroy } from '@angular/core';
import { LchLoggerService } from './lchlogger.service';

let nextId = 1;

//spy on any element to which it is applied
//usage: <div i3Spy>...</div>
@Directive({
  selector: '[i3Spy]'
})
export class SpyDirective implements OnInit, OnDestroy {

  constructor(private logger: LchLoggerService) { }

  ngOnInit() { this.logIt(`onInit`);}
  ngOnDestroy() { this.logIt(`onDestroy`);}

  private logIt(msg: string){
    this.logger.log(`Spy #${nextId++} ${msg}`);
  }
}
