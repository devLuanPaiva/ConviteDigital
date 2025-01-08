import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGuestComponent } from './form-guest.component';
import { InputComponent } from '../../shared/input/input.component';
import { InputBooleanComponent } from '../../shared/input-boolean/input-boolean.component';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('FormGuestComponent', () => {
  let component: FormGuestComponent;
  let fixture: ComponentFixture<FormGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormGuestComponent,
        InputComponent,
        InputBooleanComponent,
        CommonModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FormGuestComponent);
    component = fixture.componentInstance;
  });
  it('should emit updated guest data when onGuestChange is called', () => {
    spyOn(component.guestChanged, 'emit');
    component.guest = { guestName: 'Test Guest', email: 'test@example.com' };

    const changes = { email: 'updated@example.com' };
    component.onGuestChange(changes);

    expect(component.guest).toEqual({
      guestName: 'Test Guest',
      email: 'updated@example.com',
    });
    expect(component.guestChanged.emit).toHaveBeenCalledWith({
      guestName: 'Test Guest',
      email: 'updated@example.com',
    });
  });
  it('should update guest name when the input changes', () => {
    spyOn(component.guestChanged, 'emit');
    component.guest = { guestName: '' };

    fixture.detectChanges();
    const nameInput = fixture.debugElement.query(
      By.css('app-input[label="Nome"] input'),
    );
    nameInput.nativeElement.value = 'New Name';
    nameInput.nativeElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    expect(component.guest.guestName).toBe('New Name');
    expect(component.guestChanged.emit).toHaveBeenCalledWith({
      guestName: 'New Name',
    });
  });
});
