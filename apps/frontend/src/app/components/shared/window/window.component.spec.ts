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
  it('should display default event image if no input image is provided', () => {
    fixture.detectChanges();
    const imgElement = fixture.debugElement.query(
      By.css('img[alt="Event"]'),
    ).nativeElement;
    expect(imgElement.src).toContain(
      '360_F_812701281_qDF1YDwHrQgs2BbUCIrgqzkdkNhokjwp.jpg',
    );
  });
  it('should display input event image if provided', () => {
    component.image = 'https://example.com/event.jpg';
    fixture.detectChanges();
    const imgElement = fixture.debugElement.query(
      By.css('img[alt="Event"]'),
    ).nativeElement;
    expect(imgElement.src).toContain('event.jpg');
  });
  it('should display default label if no input label is provided', () => {
    fixture.detectChanges();
    const labelText = fixture.debugElement.query(By.css('p.text-sm'))
      .nativeElement.textContent;
    expect(labelText).toBe(' Detalhes do Evento: ');
  });
  it('should display input label if provided', () => {
    component.label = 'Evento Especial';
    fixture.detectChanges();
    const labelText = fixture.debugElement.query(By.css('p.text-sm'))
      .nativeElement.textContent;
    expect(labelText).toBe(' Evento Especial ');
  });
  it('should display default title if no input title is provided', () => {
    fixture.detectChanges();
    const titleText = fixture.debugElement.query(By.css('h1.text-4xl'))
      .nativeElement.textContent;
    expect(titleText).toBe(' Título do Evento ');
  });
});
