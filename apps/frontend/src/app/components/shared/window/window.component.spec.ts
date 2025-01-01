import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WindowComponent } from './window.component';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('WindowComponent', () => {
  let component: WindowComponent;
  let fixture: ComponentFixture<WindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, WindowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WindowComponent);
    component = fixture.componentInstance;
  });

  it('should display default background image if no input is provided', () => {
    fixture.detectChanges();
    const imgElement = fixture.debugElement.query(
      By.css('img[alt="background"]'),
    ).nativeElement;
    expect(imgElement.src).toContain('EVP_0141-scaled.jpg');
  });
  it('should display input background image if provided', () => {
    component.background = 'https://example.com/background.jpg';
    fixture.detectChanges();
    const imgElement = fixture.debugElement.query(
      By.css('img[alt="background"]'),
    ).nativeElement;
    expect(imgElement.src).toContain('background.jpg');
  });
});
