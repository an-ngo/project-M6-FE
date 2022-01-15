import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserpageComponent} from "./userpage/userpage.component";
import { EdituserComponent } from './edituser/edituser.component';
import { RegisterproviderComponent } from './registerprovider/registerprovider.component';


@NgModule({
  declarations: [
    UserpageComponent,
    EdituserComponent,
    RegisterproviderComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
