import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WindowComponent } from '../../components/shared/window/window.component';
import { ClipboardComponent } from '../../components/shared/clipboard/clipboard.component';
import { EventInformationComponent } from '../../components/event/event-information/event-information.component';
import { AccessByQrCodeComponent } from '../../components/event/access-by-qr-code/access-by-qr-code.component';
import { EventService } from '../../services/event.service';
import { Event } from 'core';

@Component({
  selector: 'app-success',
  imports: [
    CommonModule,
    WindowComponent,
    ClipboardComponent,
    EventInformationComponent,
    AccessByQrCodeComponent,
  ],
  templateUrl: './success.component.html',
})
export class SuccessComponent implements OnInit {
  event: Partial<Event> = {};
  currentURL: string = ''
  constructor(private readonly eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.event$.subscribe((event) => (this.event = event));
    this.currentURL = window.location.origin;
  }
}
