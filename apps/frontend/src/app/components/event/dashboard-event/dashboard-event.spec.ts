import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardEventComponent } from './dashboard-event.component';
import { EventInformationComponent } from '../event-information/event-information.component';
import { AccessByQrCodeComponent } from '../access-by-qr-code/access-by-qr-code.component';
import { StatisticsComponent } from '../../shared/statistics/statistics.component';
import { ListGuestsComponent } from '../list-guests/list-guests.component';
import { Event, Guest } from 'core';

describe('DashboardEventComponent', () => {
  let component: DashboardEventComponent;
  let fixture: ComponentFixture<DashboardEventComponent>;

  const mockEvent: Event = {
    id: '123',
    guests: [
      { confirmed: true, numberOfCompanions: 2 } as Guest,
      { confirmed: false } as Guest,
    ],
    alias: 'festa-vicosa',
    password: 'aCc18ctCWT7c3mhskw-z',
    name: 'ECOP - ENCONTRO DE COMPUTAÇÃO DO OESTE POTIGUAR',
    description: 'Encontro de Computação do Oeste Potiguar',
    date: new Date('2025-07-20T07:00'),
    location: 'viçosa',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgw80hHTHB1B1UUB_7MshEFpuGzdYS8u8ZNg&s',
    backgroundImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgw80hHTHB1B1UUB_7MshEFpuGzdYS8u8ZNg&s',
    expectedAudience: 5,
  };
  const mockPresents: Guest[] = [
    {
        confirmed: true,
        hasCompanions: false,
        numberOfCompanions: 0,
        id: '',
        name: '',
        email: ''
    },
  ];
  const mockAbsents: Guest[] = [
    {
        confirmed: false,
        hasCompanions: false,
        numberOfCompanions: 0,
        id: '',
        name: '',
        email: ''
    },
  ];
  const mockTotal = 3;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DashboardEventComponent,
        EventInformationComponent,
        AccessByQrCodeComponent,
        StatisticsComponent,
        ListGuestsComponent,
      ],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEventComponent);
    component = fixture.componentInstance;

    component.event = mockEvent;
    component.presents = mockPresents;
    component.absent = mockAbsents;
    component.total = mockTotal;
    component.updateGuestList = jasmine.createSpy('updateGuestList');
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
