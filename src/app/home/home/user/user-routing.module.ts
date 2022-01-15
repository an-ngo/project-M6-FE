import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserpageComponent} from "./userpage/userpage.component";
import {EdituserComponent} from "./edituser/edituser.component";
import {RegisterComponent} from "../../register/register.component";

const routes: Routes = [
  {
    path: '', component: UserpageComponent
  },
  {
    path: 'edit', component: EdituserComponent
  },
  {
    path: 'register', component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
