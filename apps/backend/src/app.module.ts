import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './database/db.module';
import { EventsModule } from './event/event.module';

@Module({
  imports: [DbModule, EventsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
