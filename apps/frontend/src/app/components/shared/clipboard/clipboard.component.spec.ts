import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClipboardComponent } from './clipboard.component';
import { MessageService } from '../../../services/message.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('ClipboardComponent', () => {
  let component: ClipboardComponent;
  let fixture: ComponentFixture<ClipboardComponent>;
  let messageServiceSpy: jasmine.SpyObj<MessageService>;

  beforeEach(async () => {
    messageServiceSpy = jasmine.createSpyObj('MessageService', ['success']);

    await TestBed.configureTestingModule({
      imports: [ClipboardComponent, CommonModule, FontAwesomeModule],
      providers: [{ provide: MessageService, useValue: messageServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(ClipboardComponent);
    component = fixture.componentInstance;
  });
  it('should display the label and text', () => {
    component.label = 'Label Test';
    component.text = 'Test Text';
    fixture.detectChanges();

    const labelElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    const textElement = fixture.debugElement.query(
      By.css('p.flex-1'),
    ).nativeElement;

    expect(labelElement.textContent).toBe('Label Test');
    expect(textElement.textContent).toBe('Test Text');
  });
  it('should call textCopy when the copy icon is clicked', () => {
    spyOn(component, 'textCopy');
    component.text = 'Test Copy Text';
    fixture.detectChanges();

    const copyIcon = fixture.debugElement.query(
      By.css('.cursor-pointer'),
    ).nativeElement;
    copyIcon.click();

    expect(component.textCopy).toHaveBeenCalled();
  });
  it('should copy the text to the clipboard and show success message', async () => {
    spyOn(navigator.clipboard, 'writeText').and.resolveTo();
    component.text = 'Text to Copy';
    component.textCopy();

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Text to Copy');
    expect(messageServiceSpy.success).toHaveBeenCalledWith(
      'Texto copiado com sucesso!',
    );
  });
  it('should trigger textCopy on Enter keydown', () => {
    spyOn(component, 'textCopy');
    const copyIcon = fixture.debugElement.query(
      By.css('.cursor-pointer'),
    ).nativeElement;

    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    copyIcon.dispatchEvent(event);

    expect(component.textCopy).toHaveBeenCalled();
  });
});
