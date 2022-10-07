import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database.module';
import { EnvModule } from './env.module';

@Module({
  imports: [EnvModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
