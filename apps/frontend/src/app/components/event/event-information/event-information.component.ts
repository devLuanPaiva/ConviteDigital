import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Event } from 'core';
import { InformationComponent } from '../../shared/information/information.component';

@Component({
  selector: 'app-event-information',
  imports: [CommonModule, InformationComponent],
  templateUrl: './event-information.component.html',
})
export class EventInformationComponent {
  @Input() event: Partial<Event> = {};
  @Input() hideName?: boolean;
  @Input() classNameProps?: string;

  get formattedDate(): string {
    return this.event.date
      ? `${new Date(this.event.date).toLocaleDateString()} às ${new Date(this.event.date).toLocaleTimeString()}`
      : 'Data não disponível';
  }
}
