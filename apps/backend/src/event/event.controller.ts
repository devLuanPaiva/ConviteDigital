import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import { EventProvider } from './event.provider';
import {
  Event,
  complementEvent,
  DateFormatter,
  Guest,
  complementGuest,
  Id,
} from 'core';

@Controller('api/events')
export class EventsController {
  constructor(readonly repo: EventProvider) {}

  @Post()
  async saveEvent(@Body() event: Event) {
    const eventRegistered = await this.repo.searchByAlias(event.alias);
    if (eventRegistered && eventRegistered.id !== event.id) {
      throw new HttpException('Já existe um event com este alias', 400);
    }

    const eventCompleted = complementEvent(this.deserialize(event));
    await this.repo.save(eventCompleted);
    return this.serialize(eventCompleted);
  }
  @Post(':alias/guest')
  async saveGuest(@Body() guest: Guest, @Param('alias') alias: string) {
    const eventRegistered = await this.repo.searchByAlias(alias);
    if (!eventRegistered) {
      throw new HttpException('Evento não encontrado', 400);
    }
    const guestCompleted = complementGuest(guest);
    await this.repo.saveGuest(eventRegistered, guestCompleted);
  }
  @Post('access')
  async accessEvent(@Body() data: { id: string; password: string }) {
    const event = await this.repo.searchById(data.id, true);
    if (!event) {
      throw new HttpException('Evento não encontrado', 400);
    }
    if (event.password !== data.password) {
      throw new HttpException('Credenciais inválidas', 400);
    }
    return this.serialize(event);
  }
  @Get()
  async searchAllEvents() {
    const events = await this.repo.searchAll();
    return events.map(this.serialize);
  }
  @Get(':idOrAlias')
  async searchEventById(@Param('idOrAlias') idOrAlias: string) {
    let event: Event;
    if (Id.valid(idOrAlias)) {
      event = await this.repo.searchById(idOrAlias, true);
    } else {
      event = await this.repo.searchByAlias(idOrAlias, true);
    }
    return this.serialize(event);
  }
  @Get('validate/:alias/:id')
  async aliasValidate(@Param('alias') alias: string, @Param('id') id: string) {
    const event = await this.repo.searchByAlias(alias);
    return { valid: !event || event.id === id };
  }

  private serialize(event: Event) {
    if (!event) return null;
    return {
      ...event,
      date: DateFormatter.format(event.date),
    };
  }

  private deserialize(event: any): Event {
    if (!event) return null;
    return {
      ...event,
      date: DateFormatter.unformat(event.date),
    } as Event;
  }
}
