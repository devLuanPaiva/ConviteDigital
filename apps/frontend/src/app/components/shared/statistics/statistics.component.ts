import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics',
  imports: [],
  templateUrl: './statistics.component.html',
})
export class StatisticsComponent {
  @Input() text: string = '';
  @Input() value: any;
  @Input() image: string = '';
}
