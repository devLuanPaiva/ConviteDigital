import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-big-logo',
    imports: [CommonModule, RouterModule],
    templateUrl: './big-logo.component.html'
})
export class BigLogoComponent {}
