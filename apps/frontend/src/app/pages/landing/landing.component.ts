import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BigLogoComponent } from '../../components/template/big-logo/big-logo.component';

@Component({
  selector: 'app-landing',
  imports: [RouterModule, CommonModule, BigLogoComponent],
  templateUrl: './landing.component.html',
})
export class LandingComponent {}
