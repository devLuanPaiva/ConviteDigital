import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ThankPageComponent } from './thank-page.component';

const routes: Routes = [
  {
    path: '',
    component: ThankPageComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ThankPageComponent],
})
export class ThankPageModule {}
