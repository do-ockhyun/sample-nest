import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

@Injectable()
export class AppService {
  constructor(@InjectEntityManager() private entityManager: EntityManager,) {

  }
  
  async getHello(): Promise<string> {
    const [now] = await this.entityManager.query('select now()')    
    return 'Hello World - ' + now['now()'];
  }
}
