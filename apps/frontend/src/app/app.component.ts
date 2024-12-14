import { Component, ViewEncapsulation } from '@angular/core';
import { PageComponent } from './components/template/page/page.component';
import { LandingComponent } from './pages/landing/landing.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PageComponent, LandingComponent, CommonModule],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor(public router: Router) {}
}
