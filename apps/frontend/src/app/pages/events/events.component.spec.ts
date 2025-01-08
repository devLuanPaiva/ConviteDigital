import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsComponent } from './events.component';
import { EventService } from '../../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;
  let mockEventService: jasmine.SpyObj<EventService>;
  let mockActivatedRoute: Partial<ActivatedRoute>;

  beforeEach(async () => {
    mockEventService = jasmine.createSpyObj('EventService', ['loadAllEvents'], {
      allEvents$: of([
        {
          id: 1,
          name: 'Event 1',
          description: 'Description 1',
          image: '',
          alias: '',
          password: '',
        },
      ]),
    });

    await TestBed.configureTestingModule({
      imports: [EventsComponent],
      providers: [
        { provide: EventService, useValue: mockEventService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load events on ngOnInit', () => {
    expect(component.dynamicEvents.length).toBe(1);
    expect(component.dynamicEvents[0].name).toBe('Event 1');
    expect(mockEventService.loadAllEvents).toHaveBeenCalled();
  });
  it('should render event names in the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const eventName = compiled.querySelector('h2')?.textContent;
    expect(eventName).toContain('Event 1');
  });
  it('should fetch events from the service', (done) => {
    const service = TestBed.inject(EventService);

    service.allEvents$.subscribe((events) => {
      expect(events.length).toBeGreaterThan(0);
      done();
    });

    service.loadAllEvents();
  });
  it('should have the correct admin link', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const adminLink = compiled
      .querySelector('a.button.red')
      ?.getAttribute('href');
    expect(adminLink).toContain('/evento/admin');
  });
});
