import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';
import { By } from '@angular/platform-browser';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should display the label if provided', () => {
    component.label = 'Test Label';
    fixture.detectChanges();

    const labelElement = fixture.debugElement.query(
      By.css('label'),
    ).nativeElement;
    expect(labelElement.textContent).toBe(' Test Label ');
  });
  it('should emit valueChange when the input value changes', () => {
    spyOn(component.valueChange, 'emit');

    const inputElement = fixture.debugElement.query(
      By.css('input'),
    ).nativeElement;
    inputElement.value = 'New value';
    inputElement.dispatchEvent(new Event('input'));

    expect(component.valueChange.emit).toHaveBeenCalledWith('New value');
  });
});
