import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-boolean',
  imports: [CommonModule],
  templateUrl: './input-boolean.component.html',
})
export class InputBooleanComponent {
  @Input() label?: string;
  @Input() value: boolean = true;
  @Input() className?: string;
  @Output() valueChange = new EventEmitter<boolean>();

  onItemClick(valor: boolean, event: Event): void {
    event.preventDefault()
    this.valueChange.emit(valor);
  }
}
