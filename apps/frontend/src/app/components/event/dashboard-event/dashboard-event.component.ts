import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Event, Guest } from 'core';
import { EventInformationComponent } from '../event-information/event-information.component';
import { AccessByQrCodeComponent } from '../access-by-qr-code/access-by-qr-code.component';
import { StatisticsComponent } from '../../shared/statistics/statistics.component';
import { ListGuestsComponent } from '../list-guests/list-guests.component';

@Component({
  selector: 'app-dashboard-event',
  imports: [
    CommonModule,
    EventInformationComponent,
    AccessByQrCodeComponent,
    StatisticsComponent,
    ListGuestsComponent
  ],
  templateUrl: './dashboard-event.component.html',
})
export class DashboardEventComponent {
  @Input() event!: Event;
  @Input() presents: Guest[] = [];
  @Input() absent: Guest[] = [];
  @Input() total: number = 0;
  @Input() updateGuestList!: () => void;
}
