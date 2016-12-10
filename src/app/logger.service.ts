import { Injectable } from '@angular/core';
import { UserService } from './user.service';

class BaseLogger {
logs: string[] = [];
log(message: string): void {
  this.logs.push(message);
  console.log(message);
}
}

@Injectable()
export class LoggerService extends BaseLogger {
constructor(private userService: UserService) {super(); }
  log(rxms: string): void {
    let name = this.userService.user();
    super.log(`message to ${name}: ${rxms}`);
  }
}
