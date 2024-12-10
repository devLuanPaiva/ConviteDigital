import { Module } from '@nestjs/common';
import { DbModule } from 'src/database/db.module';
import { EventsController } from './event.controller';
import { EventProvider } from './event.provider';

@Module({
  imports: [DbModule],
  controllers: [EventsController],
  providers: [EventProvider],
})
export class EventsModule {}
