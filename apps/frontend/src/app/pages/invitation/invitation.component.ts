import { Component, OnInit } from '@angular/core';
import { Event, Guest } from 'core';
import { Subscription } from 'rxjs';
import { EventService } from '../../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { WindowComponent } from '../../components/shared/window/window.component';
import { EventInformationComponent } from '../../components/event/event-information/event-information.component';
import { FormGuestComponent } from '../../components/event/form-guest/form-guest.component';
import { LoadingComponent } from '../../components/shared/loading/loading.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invitation',
  imports: [
    WindowComponent,
    EventInformationComponent,
    FormGuestComponent,
    LoadingComponent,
    CommonModule,
  ],
  templateUrl: './invitation.component.html',
})
export class InvitationComponent implements OnInit {
  event: Event | null = null;
  guest: Guest | null = null;
  subscriptions: Subscription = new Subscription();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly eventService: EventService,
  ) {}
  async ngOnInit(): Promise<void> {
    const alias = this.route.snapshot.paramMap.get('alias');

    if (alias) {
      try {
        const eventData = await this.eventService.loadEvent(alias);

        if (eventData) {
          this.event = eventData;
          this.guest = eventData.guests ? eventData.guests[0] : null;
        }
      } catch (error) {
        console.error('Erro ao carregar o evento:', error);
      }
    }
  }

  changeGuest(guest: Partial<Guest>) {
    this.eventService.toggleGuest(guest);
  }
  addGuest() {
    this.eventService.addGuest();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
