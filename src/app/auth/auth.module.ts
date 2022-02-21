import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {AngularFireModule} from "@angular/fire/compat";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA3QYwP0mkALedLwvHWcbTPEmZ83pghbbg",
      authDomain: "frontend-frozenlist.firebaseapp.com",
      projectId: "frontend-frozenlist",
      storageBucket: "frontend-frozenlist.appspot.com",
      messagingSenderId: "897746207057",
      appId: "1:897746207057:web:4f436d5cfcdc8630e35370"
    })
  ]
})
export class AuthModule { }
