import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BigLogoComponent } from './components/template/big-logo/big-logo.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, CommonModule, BigLogoComponent],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {}
