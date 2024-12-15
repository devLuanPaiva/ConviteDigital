import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';
import { Event } from 'core';

@Component({
  selector: 'app-access-by-qr-code',
  imports: [QRCodeComponent, CommonModule],
  templateUrl: './access-by-qr-code.component.html',
})
export class AccessByQrCodeComponent {
  @Input() event: Partial<Event> = {};

  get qrCodeValue(): string {
    return JSON.stringify({
      id: this.event.id,
      password: this.event.password,
    });
  }
}
