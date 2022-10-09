import { Injectable } from '@nestjs/common';

const users = [
  {
    userId: 1,
    username: 'misolab',
    password: '1111',
  },
  {
    userId: 2,
    username: 'ohdo',
    password: '1234',
  },
];

function tempFindUser(username: string) {
  return users.find((user) => user.username === username);
}

@Injectable()
export class AuthService {
  async validateUser(username: string, password: string): Promise<any> {
    const user = tempFindUser(username); // TODO: 객체를 이용하여
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
