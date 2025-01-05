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
});
