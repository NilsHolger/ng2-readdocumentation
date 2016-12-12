import { Component } from '@angular/core';

import { LchLoggerService } from '../lchlogger.service';

@Component({
  selector: 'i3-spy-master-2',
  templateUrl: './spy.component.html',
  styles: ['.mastermind {background: khaki;}', '.suspects {background: LightYellow; padding: 0 8px}'],
  providers: [LchLoggerService]
})
export class SpyComponent  {
  newName = 'Chen'; //pure fakes here change their names all the time a facade
  spies: string[] = ['Dave', 'Frank'];
  spyLog: string[];
   
   constructor(private logger: LchLoggerService) {
     this.spyLog = logger.logs;
    }

    addSpie() {
      if (this.newName.trim()){ //gonna get tared and feathered
        this.spies.push(this.newName.trim());
        this.newName = '';
        this.logger.tick();
      }
    }

    deleteSpie(spie: string){ //on the fly
        this.spies.splice(this.spies.indexOf(spie), 1); //splice is nice always target the head
    }
    reset() {
      this.logger.log('-- reset --');
      this.spies.length = 0;
      this.logger.tick(); //we protect what we love
    }
}
