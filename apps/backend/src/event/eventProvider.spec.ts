import { Test } from '@nestjs/testing';
import { PrismaProvider } from '../../src/database/prisma.provider';
import { EventProvider } from './event.provider';
import { Event, Guest } from 'core';

jest.mock('../../src/database/prisma.provider');

describe('EventProvider', () => {
  let provider: EventProvider;
  const prismaMock = {
    event: {
      create: jest.fn(),
      findUnique: jest.fn(),
      findMany: jest.fn(),
    },
    guest: {
      create: jest.fn(),
    },
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        EventProvider,
        {
          provide: PrismaProvider,
          useValue: prismaMock,
        },
      ],
    }).compile();

    provider = moduleRef.get<EventProvider>(EventProvider);
  });

  it('should save an event with guests', async () => {
    const event: Event = {
      id: '1',
      alias: 'teste',
      description: 'Teste',
      location: 'Local',
      date: new Date(),
      guests: [],
      password: '',
      name: '',
      image: '',
      backgroundImage: '',
      expectedAudience: 0,
    };

    prismaMock.event.create.mockResolvedValue(event);

    const result = await provider.save(event);

    expect(prismaMock.event.create).toHaveBeenCalledWith({
      data: {
        ...(event as any),
        guests: { create: event.guests },
      },
    });
    expect(result).toEqual(event);
  });
  it('should save a guest for an event', async () => {
    const event: Event = {
      id: '1',
      alias: 'teste',
      description: 'Teste',
      location: 'Local',
      date: new Date(),
      guests: [],
      password: '',
      name: '',
      image: '',
      backgroundImage: '',
      expectedAudience: 0,
    };

    const guest: Guest = {
      id: '1',
      name: 'Jhon',
      email: 'teste@teste.com',
      numberOfCompanions: 2,
      hasCompanions: false,
      confirmed: false,
    };

    prismaMock.guest.create.mockResolvedValue(guest);

    const result = await provider.saveGuest(event, guest);

    expect(prismaMock.guest.create).toHaveBeenCalledWith({
      data: {
        ...guest,
        guestName: guest.name,
        event: { connect: { id: event.id } },
      },
    });
    expect(result).toEqual(guest);
  });
  it('shoult retrieve all events', async () => {
    const events: Event[] = [
      {
        id: '1',
        alias: 'teste',
        description: 'Teste',
        location: 'Local',
        date: new Date(),
        guests: [],
        password: '',
        name: '',
        image: '',
        backgroundImage: '',
        expectedAudience: 0,
      },
    ];
    prismaMock.event.findMany.mockResolvedValue(events);
    const result = await provider.searchAll();
    expect(prismaMock.event.findMany).toHaveBeenCalled();
    expect(result).toEqual(events);
  });
  it('should retrieve an event by ID', async () => {
    const event: Event = {
      id: '1',
      alias: 'teste',
      description: 'Teste',
      location: 'Local',
      date: new Date(),
      guests: [],
      password: '',
      name: '',
      image: '',
      backgroundImage: '',
      expectedAudience: 0,
    };
    prismaMock.event.findUnique.mockResolvedValue(event);
    const result = await provider.searchById('1', true);
    expect(prismaMock.event.findUnique).toHaveBeenCalledWith({
      where: { id: '1' },
      include: { guests: true },
    });
    expect(result).toEqual(event);
  });

  it('should retrieve an event by alias', async () => {
    const event: Event = {
      id: '1',
      alias: 'teste',
      description: 'Teste',
      location: 'Local',
      date: new Date(),
      guests: [],
      password: '',
      name: '',
      image: '',
      backgroundImage: '',
      expectedAudience: 0,
    };
    prismaMock.event.findUnique.mockResolvedValue(event);
    const result = await provider.searchByAlias('teste', false);
    expect(prismaMock.event.findUnique).toHaveBeenCalledWith({
      where: { alias: 'teste' },
      select: {
        id: true,
        name: true,
        description: true,
        date: true,
        location: true,
        image: true,
        backgroundImage: true,
        alias: true,
        password: false,
        expectedAudience: false,
        guests: false,
      },
    });
    expect(result).toEqual(event);
  })
});
