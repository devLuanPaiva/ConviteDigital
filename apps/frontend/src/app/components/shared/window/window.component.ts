import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './window.component.html',
})
export class WindowComponent {
  @Input() label?: string;
  @Input() title?: string;
  @Input() image?: string;
  @Input() background?: string;

}
