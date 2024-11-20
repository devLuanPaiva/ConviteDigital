import { Component, ViewEncapsulation } from '@angular/core';
import { PageComponent } from './components/template/page/page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PageComponent],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {}
