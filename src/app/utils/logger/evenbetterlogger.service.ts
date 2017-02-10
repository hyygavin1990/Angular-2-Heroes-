import { Injectable } from '@angular/core';
import {Logger} from "./logger.service";
import {UserService} from "../../modules/user/service/user.service";
@Injectable()
export class EvenBetterLogger extends Logger {
  constructor(private userService: UserService) { super(); }

  log(message: string) {
    let name = this.userService.getUsername();
    super.log(`Message to ${name}: ${message}`);
  }
}
