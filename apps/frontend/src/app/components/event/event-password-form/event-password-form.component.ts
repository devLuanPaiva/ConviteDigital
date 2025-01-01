import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputComponent } from '../../shared/input/input.component';

@Component({
  selector: 'app-event-password-form',
  imports: [InputComponent],
  templateUrl: './event-password-form.component.html',
})
export class EventPasswordFormComponent {
  @Input() password: string
  @Output() accessEvent = new EventEmitter<string>();
  @Output() changePassword = new EventEmitter<string>();

  onChangePassword(newPassword: string): void{
    this.changePassword.emit(newPassword);
    this.password = newPassword;
  }
  
  onAccessEvent(): void {
    this.accessEvent.emit();
  }
}
