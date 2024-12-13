import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [LogoComponent, CommonModule, RouterOutlet],
  templateUrl: './page.component.html',
})
export class PageComponent {

}
