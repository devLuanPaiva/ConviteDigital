import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-steps',
  imports: [CommonModule],
  templateUrl: './steps.component.html',
})
export class StepsComponent {
  @Input() labels: string[] = [];
  @Input() actionLabel: string = '';
  @Input() allowNextStep: boolean[] = [];
  @Output() action = new EventEmitter<void>();

  currentStep: number = 0;

  noPreviousStep() {
    return this.currentStep === 0;
  }
  noNextStep() {
    return this.currentStep === this.labels.length - 1;
  }
  previousStep() {
    if (this.noPreviousStep()) return;
    this.currentStep--;
  }
  nextStep() {
    if (this.noNextStep()) return;
    this.currentStep++;
  }

  onAction(): void {
    this.action.emit();
  }
}
