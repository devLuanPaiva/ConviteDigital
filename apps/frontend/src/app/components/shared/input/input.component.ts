import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() label?: string;
  @Input() value!: string | number;
  @Input() description?: string;
  @Input() observation?: string;
  @Input() error?: string;
  @Input() type: string = 'text';
  @Input() outterClassName?: string;

  @Output() valueChange = new EventEmitter<string | number>();

  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.valueChange.emit(inputValue);
  }
}
