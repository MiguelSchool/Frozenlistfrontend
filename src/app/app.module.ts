import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";

import {environment} from "../environments/environment";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFireModule} from "@angular/fire/compat";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/auth/auth.module')
      .then(module => module.AuthModule)
  }
]

// loader module
export  function  HttpLoaderFactory(http:  HttpClient) {
  return  new  TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide:  TranslateLoader,
        useFactory:  HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(translate:  TranslateService) {
    translate.setDefaultLang('de');
    translate.use('de');
  }
}
