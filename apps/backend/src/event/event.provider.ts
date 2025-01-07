import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/database/prisma.provider';
import { Event, Guest } from 'core';
@Injectable()
export class EventProvider {
  constructor(readonly prisma: PrismaProvider) {}
  save(event: Event) {
    return this.prisma.event.create({
      data: {
        ...(event as any),
        guests: { create: event.guests },
      },
    });
  }
  saveGuest(event: Event, guest: Guest) {
    return this.prisma.guest.create({
      data: {
        guestName: guest.guestName,
        numberOfCompanions: +(guest.numberOfCompanions ?? 0),
        confirmed: guest.confirmed,
        email: guest.email,
        hasCompanions: guest.hasCompanions,
        event: { connect: { id: event.id } },
      },
    });
  }

  async searchAll(): Promise<Event[]> {
    return this.prisma.event.findMany() as any;
  }
  async searchById(
    id: string,
    completed: boolean = false,
  ): Promise<Event | null> {
    return this.prisma.event.findUnique({
      where: { id },
      include: { guests: completed },
    }) as any;
  }
  async searchByAlias(
    alias: string,
    completed: boolean = false,
  ): Promise<Event | null> {
    return this.prisma.event.findUnique({
      where: { alias },
      select: {
        id: true,
        name: true,
        description: true,
        date: true,
        location: true,
        image: true,
        backgroundImage: true,
        alias: true,
        password: completed,
        expectedAudience: completed,
        guests: completed,
      },
    }) as any;
  }
}
