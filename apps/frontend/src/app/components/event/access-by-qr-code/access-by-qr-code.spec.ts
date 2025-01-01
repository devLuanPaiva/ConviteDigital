import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccessByQrCodeComponent } from './access-by-qr-code.component';
import QRCode from 'qrcode';
import { Event } from 'core';

describe('AccessByQrCodeComponent', () => {
  let component: AccessByQrCodeComponent;
  let fixture: ComponentFixture<AccessByQrCodeComponent>;

  const mockEvent: Partial<Event> = {
    id: '123',
    password: 'test-password',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessByQrCodeComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AccessByQrCodeComponent);
    component = fixture.componentInstance;

    component.event = mockEvent;
    spyOn(QRCode, 'toDataURL').and.returnValue(Promise.resolve('mock-url') as any);
    fixture.detectChanges();
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
