import { Injectable } from '@angular/core';
import {User} from "./../../../pojo/user";
@Injectable()
export class UserService {
  public user:User;
  getUsername(){
    return "angular";
  }
}
