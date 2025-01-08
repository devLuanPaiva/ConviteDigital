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
  it('should set the input type based on the "type" input property', () => {
    component.type = 'password';
    fixture.detectChanges();

    const inputElement = fixture.debugElement.query(
      By.css('input'),
    ).nativeElement;
    expect(inputElement.type).toBe('password');
  });
  it('should apply the outterClassName to the form', () => {
    component.outterClassName = 'custom-class';
    fixture.detectChanges();

    const formElement = fixture.debugElement.query(
      By.css('form'),
    ).nativeElement;
    expect(formElement.classList).toContain('custom-class');
  });
  it('should display the error message if provided', () => {
    component.error = 'Test Error';
    fixture.detectChanges();

    const errorElement = fixture.debugElement.query(
      By.css('span'),
    ).nativeElement;
    expect(errorElement.textContent).toBe('Test Error');
  });
  it('should display the observation if provided and no error', () => {
    component.observation = 'Test Observation';
    component.error = undefined;
    fixture.detectChanges();

    const observationElement = fixture.debugElement.query(
      By.css('p.text-yellow-300'),
    ).nativeElement;
    expect(observationElement.textContent).toBe(' Test Observation ');
  });
});
