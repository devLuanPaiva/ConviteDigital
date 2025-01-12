import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputComponent } from '../../shared/input/input.component';

@Component({
  selector: 'app-event-password-form',
  imports: [InputComponent],
  templateUrl: './event-password-form.component.html',
})
export class EventPasswordFormComponent {
  @Input() id: string
  @Input() password: string;
  @Output() accessEvent = new EventEmitter<string>();
  @Output() changePassword = new EventEmitter<string>();

  onChangePassword(newPassword: string): void {
    this.changePassword.emit(newPassword);
    this.password = newPassword;
  }

  onAccessEvent(event: Event): void {
    event.preventDefault();
    if (!this.password || this.password.trim() === '') {
      console.error('Senha não pode estar vazia');
      return;
    }
    this.accessEvent.emit(this.password);
  }
}
