import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: ':id',
    component: AdminComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), AdminComponent],
})
export class AdminModule {}
