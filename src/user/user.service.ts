import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'Maria',
      email: 'maria@gmail.com',
      password: '123456',
    },
  ];

  public findUserByName(data: string) {
    const user = this.users.find((user) => user.name === data);
    return user;
  }

  public create(data: User) {
    this.users.push(data);

    return data;
  }
}
