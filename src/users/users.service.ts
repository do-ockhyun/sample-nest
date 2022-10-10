import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserRepository) {}

  findUser(username: string): Promise<User | undefined> {
    return this.userRepository.findUserByUsername(username);
  }

  join(username: string, password: string) {
    return this.userRepository.createUser(username, password);
  }
}
