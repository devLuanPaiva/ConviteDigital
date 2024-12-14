import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from '../../../services/event.service';
import { Event, Alias, DateFormatter } from 'core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../shared/input/input.component';
import { StepsComponent } from '../../shared/steps/steps.component';

@Component({
  selector: 'app-form-event',
  imports: [CommonModule, InputComponent, StepsComponent],
  templateUrl: './form-event.component.html',
})
export class FormEventComponent implements OnInit, OnDestroy {
  event: Partial<Event> = {};
  aliasValid: boolean = false;
  allowNextStep: boolean[] = [];
  private subscription: Subscription | undefined;
  public Alias = Alias;
  public DateFormatter = DateFormatter;
  labels = [
    'Identificação do Evento',
    'Local e Data',
    'Informações Importantes',
  ];

  constructor(private readonly eventService: EventService) {}

  ngOnInit(): void {
    this.subscription = this.eventService.event$.subscribe((event) => {
      this.event = event;
      this.aliasValid = this.isAliasValid(event.alias);
      this.updateAllowNextStep();
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  toggleEvent(alias: string, value: any): void {
    if (alias === 'date') {
      value = DateFormatter.format(value); 
    }
    this.event = { ...this.event, [alias]: value };
    this.eventService.toggleEvent(this.event);
    if (alias === 'alias') {
      this.aliasValid = this.isAliasValid(this.event.alias);
    }
    this.updateAllowNextStep();
  }
  
  formatEventDate(date: string | Date | undefined): string {
    const validDate = typeof date === 'string' ? new Date(date) : date || new Date();
    return DateFormatter.format(validDate);
  }
  
  
  saveEvent(): void {
    this.eventService.saveEvent();
  }

  private isAliasValid(alias: string | undefined): boolean {
    return (
      alias !== undefined && typeof alias === 'string' && alias.trim() !== ''
    );
  }

  private updateAllowNextStep(): void {
    this.allowNextStep = [
      !!this.event.alias && !!this.event.name && this.aliasValid,
      !!this.event.date && !!this.event.location,
      !!this.event.description && (this.event.expectedAudience ?? 0) > 0,
    ];
  }
}
