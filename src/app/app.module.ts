import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";

import {environment} from "../environments/environment";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import { initializeApp } from "firebase/app";
import {AngularFireModule} from "@angular/fire/compat";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/auth/auth.module')
      .then(module => module.AuthModule)
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule {
}
