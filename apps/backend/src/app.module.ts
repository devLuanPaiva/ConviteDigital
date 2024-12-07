import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './database/db.module';

@Module({
  imports: [DbModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
