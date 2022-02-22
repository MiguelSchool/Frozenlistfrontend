import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {AngularFireModule} from "@angular/fire/compat";
import {FirebaseAppService} from "./shared/services/firebase-app.service";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
]
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ],
  providers: [
    FirebaseAppService
  ]
})
export class AuthModule { }
