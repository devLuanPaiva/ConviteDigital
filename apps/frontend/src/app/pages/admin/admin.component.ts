import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event, Guest } from 'core';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DashboardEventComponent } from '../../components/event/dashboard-event/dashboard-event.component';
import { EventPasswordFormComponent } from '../../components/event/event-password-form/event-password-form.component';
import { ApiService } from '../../services/api.service';

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
  subscriptions: Subscription = new Subscription();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly apiService: ApiService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const password = this.route.snapshot.paramMap.get('password');
    if (id && password) {
      const decodedPassword = decodeURIComponent(password);
      this.password = decodedPassword;
      this.loadEvent(id, decodedPassword);
    }
  }

  loadEvent(id: string, password: string): void {
    const subscription = this.apiService
      .httpPost('events/access', { id, password })
      .subscribe((eventData: Event | null) => {
        if (eventData) {
          this.event = eventData;
          this.presents = this.event.guests?.filter((g) => g.confirmed) || [];
          this.absents = this.event.guests?.filter((g) => !g.confirmed) || [];
          this.totalGuests = this.presents.reduce(
            (total, guest) => total + (guest.numberOfCompanions || 0) + 1,
            0,
          );
        }
      });

    this.subscriptions.add(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
