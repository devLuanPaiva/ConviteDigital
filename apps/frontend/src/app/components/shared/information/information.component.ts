import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-information',
  imports: [CommonModule],
  templateUrl: './information.component.html',
})
export class InformationComponent {
  @Input() label: string = '';
}
