import { Component, OnInit } from '@angular/core';
import { WindowComponent } from '../../../components/shared/window/window.component';
import { CommonModule } from '@angular/common';
import { Event } from 'core';
import { EventService } from '../../../services/event.service';
import { Subscription } from 'rxjs';
import { FormEventComponent } from '../../../components/event/form-event/form-event.component';

@Component({
  selector: 'app-event',
  imports: [WindowComponent, CommonModule, FormEventComponent],
  templateUrl: './event.component.html',
})
export class EventComponent implements OnInit {
  event: Partial<Event> = {};
  private subscription: Subscription | undefined;

  constructor(private readonly eventService: EventService) {}

  ngOnInit(): void {
    this.subscription = this.eventService.event$.subscribe((event) => {
      this.event = event;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
