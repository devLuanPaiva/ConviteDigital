import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Guest } from 'core';
import { ItemGuestComponent } from '../item-guest/item-guest.component';

@Component({
  selector: 'app-list-guests',
  imports: [CommonModule, ItemGuestComponent],
  templateUrl: './list-guests.component.html',
})
export class ListGuestComponent {
  @Input() guests: Guest[] = [];
}
