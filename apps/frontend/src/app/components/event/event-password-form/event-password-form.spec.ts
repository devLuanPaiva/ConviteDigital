import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventPasswordFormComponent } from './event-password-form.component';
import { InputComponent } from '../../shared/input/input.component';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

describe('EventPasswordFormComponent', () => {
  let component: EventPasswordFormComponent;
  let fixture: ComponentFixture<EventPasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, EventPasswordFormComponent, InputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventPasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should display default password value when input is provided', () => {
    component.password = 'testPassword';
    fixture.detectChanges();

    const inputElement = fixture.debugElement.query(By.css('app-input input'));
    expect(inputElement.nativeElement.value).toBe('testPassword');
  });
  it('should emit changePassword event when password is changed', () => {
    spyOn(component.changePassword, 'emit');
    const inputElement = fixture.debugElement.query(By.css('app-input input'));
    inputElement.nativeElement.value = 'newPassword';
    inputElement.nativeElement.dispatchEvent(new Event('input'));

    expect(component.changePassword.emit).toHaveBeenCalledWith('newPassword');
  });
  it('should emit accessEvent when Acessar Evento button is clicked', () => {
    spyOn(component.accessEvent, 'emit');
    const accessButton = fixture.debugElement.query(By.css('button'));
    accessButton.triggerEventHandler('click', null);

    expect(component.accessEvent.emit).toHaveBeenCalled();
  });
  it('should update password property when onChangePassword is called', () => {
    component.onChangePassword('newPassword');
    expect(component.password).toBe('newPassword');
  });
});
