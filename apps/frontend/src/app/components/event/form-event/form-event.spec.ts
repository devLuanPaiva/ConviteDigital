import { TestBed, ComponentFixture } from '@angular/core/testing';
import { EventComponent } from '../../../pages/event/event.component';
import { FormEventComponent } from './form-event.component';
import { EventService } from '../../../services/event.service';
import { of } from 'rxjs';

class MockEventService {
  private eventSubject = { alias: '' };
  event$() {
    return of(this.eventSubject);
  }
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
  it('should subscribe to eventService and update event on initialization', () => {
    const mockEvent = { alias: 'test-event' };
    (eventService.event$ as any) = of(mockEvent);

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.event).toEqual(mockEvent);
  });
});
describe('FormEventComponent', () => {
  let component: FormEventComponent;
  let fixture: ComponentFixture<FormEventComponent>;
  let eventService: MockEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormEventComponent],
      providers: [{ provide: EventService, useClass: MockEventService }],
    });

    fixture = TestBed.createComponent(FormEventComponent);
    component = fixture.componentInstance;
    eventService = TestBed.inject(EventService) as unknown as MockEventService;
  });
  it('should validate alias correctly', () => {
    expect(component['isAliasValid']('')).toBe(false);
    expect(component['isAliasValid']('   ')).toBe(false);
    expect(component['isAliasValid']('valid-alias')).toBe(true);
  });
  it('should update event state when toggleEvent is called', () => {
    component.toggleEvent('alias', 'new-alias');
    expect(eventService.event$).toBeTruthy();
  });
});
