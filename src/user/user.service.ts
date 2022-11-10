import { Injectable } from '@nestjs/common';
import { userMock } from './user.mock';

@Injectable()
export class UserService {
  public findAll() {
    // DB actions
    return userMock;
  }
}
