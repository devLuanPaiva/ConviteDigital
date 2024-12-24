import { TestBed, ComponentFixture } from '@angular/core/testing';
import { EventComponent } from '../../../pages/event/event.component';
import { FormEventComponent } from './form-event.component';
import { EventService } from '../../../services/event.service';
import { of } from 'rxjs';

class MockEventService {
  private eventSubject = { alias: '' };
  event$ = of(this.eventSubject);

  toggleEvent(key: string, value: any) {
    this.eventSubject[key as keyof typeof this.eventSubject] = value;
  }
}

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;
  let eventService: MockEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EventComponent],
      providers: [{ provide: EventService, useClass: MockEventService }],
    });

    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    eventService = TestBed.inject(EventService) as unknown as MockEventService;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
