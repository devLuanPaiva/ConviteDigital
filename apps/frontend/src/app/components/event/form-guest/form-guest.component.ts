import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputComponent } from '../../shared/input/input.component';
import { Guest } from 'core';
import { InputBooleanComponent } from '../../shared/input-boolean/input-boolean.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-guest',
  imports: [InputComponent, InputBooleanComponent, CommonModule],
  templateUrl: './form-guest.component.html',
})
export class FormGuestComponent {
  @Input() guest: Partial<Guest>;
  @Output() guestChanged = new EventEmitter<Partial<Guest>>();
  onGuestChange(changes: Partial<Guest>): void {
    const updatedGuest = { ...this.guest, ...changes };
    this.guest = updatedGuest;
    this.guestChanged.emit(updatedGuest);
  }
}
