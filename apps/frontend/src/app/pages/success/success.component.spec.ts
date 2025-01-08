import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccessComponent } from './success.component';
import { EventService } from '../../services/event.service';
import { of } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WindowComponent } from '../../components/shared/window/window.component';
import { ClipboardComponent } from '../../components/shared/clipboard/clipboard.component';
import { EventInformationComponent } from '../../components/event/event-information/event-information.component';
import { AccessByQrCodeComponent } from '../../components/event/access-by-qr-code/access-by-qr-code.component';
import { CommonModule } from '@angular/common';

describe('SuccessComponent', () => {
  let component: SuccessComponent;
  let fixture: ComponentFixture<SuccessComponent>;
  let eventServiceSpy: jasmine.SpyObj<EventService>;

  beforeEach(async () => {
    const mockEventService = jasmine.createSpyObj('EventService', ['event$'], {
      event$: of({
        id: '123',
        name: 'Test Event',
        image: 'test-image.jpg',
        backgroundImage: 'test-bg.jpg',
        password: 'admin123',
      }),
    });

    await TestBed.configureTestingModule({
      imports: [
        SuccessComponent,
        CommonModule,
        FontAwesomeModule,
        WindowComponent,
        ClipboardComponent,
        EventInformationComponent,
        AccessByQrCodeComponent,
      ],
      providers: [{ provide: EventService, useValue: mockEventService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should subscribe to event$ and set event data', () => {
    expect(component.event).toEqual({
      id: '123',
      name: 'Test Event',
      image: 'test-image.jpg',
      backgroundImage: 'test-bg.jpg',
      password: 'admin123',
    });
  });
  it('should set currentURL on initialization', () => {
    expect(component.currentURL).toBe(window.location.origin);
  });
});
