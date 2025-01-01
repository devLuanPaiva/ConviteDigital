import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AdminComponent } from './admin.component';
import { ApiService } from '../../services/api.service';
import { Event, Guest } from 'core';
import { DashboardEventComponent } from '../../components/event/dashboard-event/dashboard-event.component';
import { EventPasswordFormComponent } from '../../components/event/event-password-form/event-password-form.component';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  const mockRoute = {
    snapshot: {
      paramMap: {
        get: (key: string) => (key === 'id' ? '123' : 'encoded-password'),
      },
    },
  };
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
  beforeEach(async () => {
    apiServiceSpy = jasmine.createSpyObj('ApiService', ['httpPost']);

    await TestBed.configureTestingModule({
      imports: [AdminComponent, DashboardEventComponent, EventPasswordFormComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockRoute },
        { provide: ApiService, useValue: apiServiceSpy },
      ],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    apiServiceSpy.httpPost.and.returnValue(of(mockEvent));
    fixture.detectChanges();
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
