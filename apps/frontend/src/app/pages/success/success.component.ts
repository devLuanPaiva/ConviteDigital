import { Event } from 'core';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { faLink, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WindowComponent } from '../../components/shared/window/window.component';
import { ClipboardComponent } from '../../components/shared/clipboard/clipboard.component';
import { EventInformationComponent } from '../../components/event/event-information/event-information.component';
import { AccessByQrCodeComponent } from '../../components/event/access-by-qr-code/access-by-qr-code.component';

@Component({
  selector: 'app-success',
  imports: [
    CommonModule,
    WindowComponent,
    ClipboardComponent,
    EventInformationComponent,
    AccessByQrCodeComponent,
    FontAwesomeModule,
  ],
  templateUrl: './success.component.html',
})
export class SuccessComponent implements OnInit {
  event: Partial<Event> = {};
  currentURL: string = '';
  faLink = faLink;
  faKey = faKey;
  constructor(private readonly eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.event$.subscribe((event) => (this.event = event));
    this.currentURL = window.location.origin;
  }
}
