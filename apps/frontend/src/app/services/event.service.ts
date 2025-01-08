import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { BehaviorSubject, firstValueFrom, map } from 'rxjs';
import {
  Event,
  Guest,
  createNullGuest,
  createNullEvent,
  DateFormatter,
} from 'core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private readonly eventsSubject = new BehaviorSubject<Event[]>([]);
  private readonly eventSubject = new BehaviorSubject<Partial<Event>>(
    createNullEvent(),
  );
  private readonly guestSubject = new BehaviorSubject<Partial<Guest>>(
    createNullGuest(),
  );
  private readonly aliasValidSubject = new BehaviorSubject<boolean>(true);

  allEvents$ = this.eventsSubject.asObservable();
  event$ = this.eventSubject.asObservable();
  guest$ = this.guestSubject.asObservable();
  aliasValid$ = this.aliasValidSubject.asObservable();

  constructor(
    private readonly apiService: ApiService,
    private readonly route: Router,
  ) {}

  loadAllEvents(): void {
    this.apiService.httpGet('events').subscribe((events: Event[]) => {
      this.eventsSubject.next(events ?? []);
    });
  }

  toggleEvent(event: Partial<Event>): void {
    this.eventSubject.next(event);
  }

  toggleGuest(guest: Partial<Guest>): void {
    const currentGuest = this.guestSubject.getValue();
    const updatedGuest = { ...currentGuest, ...guest };
    this.guestSubject.next(updatedGuest);
  }

  async saveEvent(): Promise<void> {
    try {
      const currentEvent = this.eventSubject.getValue();
      const eventSaved: Event = await firstValueFrom(
        this.apiService.httpPost('events', currentEvent),
      );

      const updatedEvent = {
        ...currentEvent,
        ...eventSaved,
        date: DateFormatter.unformat(eventSaved.date.toString()),
      };
      this.eventSubject.next(updatedEvent);
      this.route.navigate(['evento/sucesso']);
    } catch (error: any) {
      console.error(error.message || 'Ocorreu um erro inesperado!');
    }
  }

  async loadEvent(idOrAlias: string): Promise<Event> {
    const event = await firstValueFrom(
      this.apiService.httpGet(`events/${idOrAlias}`).pipe(
        map((event: Event) => ({
          ...event,
          date: DateFormatter.unformat(event.date.toString()),
        })),
      ),
    );

    this.toggleEvent(event);

    return event;
  }

  async addGuest(): Promise<void> {
    try {
      const currentEvent = this.eventSubject.getValue();
      const currentGuest = this.guestSubject.getValue();
      await firstValueFrom(
        this.apiService.httpPost(
          `events/${currentEvent.alias}/guest`,
          currentGuest,
        ),
      );
      this.route.navigate(['/evento/agradecimento']);
    } catch (error: any) {
      console.error(error.message || 'Ocorreu um erro inesperado!');
    }
  }

  async validateAlias(): Promise<void> {
    try {
      const currentEvent = this.eventSubject.getValue();
      const { aliasValid } = await firstValueFrom(
        this.apiService.httpGet(
          `events/validate/${currentEvent.alias}/${currentEvent.id}`,
        ),
      );
      this.aliasValidSubject.next(aliasValid);
    } catch (error: any) {
      console.error(error.message || 'Ocorreu um erro inesperado!');
    }
  }
  clearState(): void {
    this.eventSubject.next(createNullEvent());
    this.guestSubject.next(createNullGuest());
  }
}
