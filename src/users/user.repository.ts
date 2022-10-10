import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  findUserByUsername(username: string): Promise<User | undefined> {
    return this.repository.findOneBy({ username });
  }

  createUser(username: string, password: string): Promise<User | undefined> {
    const user = new User();
    user.username = username;
    user.password = password;
    return this.repository.save(user);
  }
}
