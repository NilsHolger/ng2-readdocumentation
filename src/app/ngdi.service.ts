import { Injectable } from '@angular/core';
import { HEROES } from './ngdi';
import { LoggerService } from './logger.service';

@Injectable()
export class NgDiService {
   private isAuthorized: boolean = true;
  constructor(private logger: LoggerService){}
//TODO: continue here https://angular.io/docs/ts/latest/guide/ngmodule.html 
//code through all  advanced chapters and the cookbook
  getHeroes(){
    let auth = this.isAuthorized ? 'authorized ' : 'unauthorized';
    this.logger.log(`getting heroes for ${auth} user.`);
    return HEROES; 
  }

}
