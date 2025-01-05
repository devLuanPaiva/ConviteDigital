import { RouterModule, Routes } from "@angular/router";
import { InvitationComponent } from "./invitation.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: '',
    component: InvitationComponent,
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), InvitationComponent],
})
export class InvitationModule {}
