import { Test } from '@nestjs/testing';
import { PrismaProvider } from '../../src/database/prisma.provider';
import { EventProvider } from './event.provider';
import { Event } from 'core';

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
});
