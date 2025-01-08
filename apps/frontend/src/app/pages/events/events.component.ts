import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event, events } from 'core';
import { CommonModule } from '@angular/common';
import { AccessByQrCodeComponent } from '../../components/event/access-by-qr-code/access-by-qr-code.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-events',
  imports: [CommonModule, AccessByQrCodeComponent, RouterModule],
  templateUrl: './events.component.html',
})
export class EventsComponent implements OnInit {
  dynamicEvents: Event[] = [];

  staticEvents: Event[] = [];
  constructor(private readonly eventService: EventService) {}
  ngOnInit(): void {
    this.eventService.allEvents$.subscribe((events) => {
      this.dynamicEvents = events;
    });
    this.eventService.loadAllEvents();

    events.forEach((event) => this.staticEvents.push(event));
  }
}
