import { Component, Input } from '@angular/core';
import QRCode from 'qrcode';
import { Event } from 'core';

@Component({
  selector: 'app-access-by-qr-code',
  templateUrl: './access-by-qr-code.component.html',
})
export class AccessByQrCodeComponent {
  @Input() event: Partial<Event> = {};
  qrCodeUrl: string = '';

  ngOnChanges(): void {
    const qrData = JSON.stringify({
      id: this.event.id,
      password: this.event.password,
    });

    QRCode.toDataURL(qrData).then((url) => {
      this.qrCodeUrl = url;
    });
  }
}
