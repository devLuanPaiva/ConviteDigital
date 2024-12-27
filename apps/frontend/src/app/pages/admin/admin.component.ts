import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event, Guest } from 'core';
import { EventService } from '../../services/event.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DashboardEventComponent } from '../../components/event/dashboard-event/dashboard-event.component';
import { EventPasswordFormComponent } from '../../components/event/event-password-form/event-password-form.component';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, DashboardEventComponent, EventPasswordFormComponent],
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  event: Event | null = null;
  password: string = '';
  presents: Guest[] = [];
  absents: Guest[] = [];
  totalGuests: number = 0;
  private subscription: Subscription = new Subscription();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly eventService: EventService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.password = this.route.snapshot.paramMap.get('password') || '';

    this.loadEvent(id, this.password);

    this.subscription = this.eventService.event$.subscribe((event) => {
      if (event) {
        this.event = event as Event; 
        this.presents = this.event.guests.filter((g) => g.confirmed) || [];
        this.absents = this.event.guests.filter((g) => !g.confirmed) || [];
        this.totalGuests = this.presents.reduce(
          (total, guest) => total + guest.numberOfCompanions + 1,
          0
        );
      }
    });
  }


  async loadEvent(id: string, password: string): Promise<void> {
    await this.eventService.loadEvent(id);
  }

  async updateGuestList(): Promise<void> {
    if (this.event) {
      await this.eventService.loadEvent(this.event.id);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
