import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputBooleanComponent } from './input-boolean.component';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

describe('InputBooleanComponent', () => {
  let component: InputBooleanComponent;
  let fixture: ComponentFixture<InputBooleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBooleanComponent, CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InputBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should display label when label input is provided', () => {
    component.label = 'Test Label';
    fixture.detectChanges();

    const labelElement = fixture.debugElement.query(By.css('label'));
    expect(labelElement).toBeTruthy();
    expect(labelElement.nativeElement.textContent).toBe('Test Label');
  });
  it('should not display label when label input is not provided', () => {
    component.label = undefined;
    fixture.detectChanges();

    const labelElement = fixture.debugElement.query(By.css('label'));
    expect(labelElement).toBeFalsy();
  });
});
