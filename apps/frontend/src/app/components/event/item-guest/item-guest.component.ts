import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Guest } from 'core';

@Component({
  selector: 'app-item-guest',
  imports: [CommonModule],
  templateUrl: './item-guest.component.html',
})
export class ItemGuestComponent {
  @Input() guest!: Guest;
}
