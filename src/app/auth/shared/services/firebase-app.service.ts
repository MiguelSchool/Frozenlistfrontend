import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {getAuth, User} from "@angular/fire/auth";
import {UserInterface} from "../types/UserInterface";
import {Observable} from "rxjs";
import firebase from "firebase/compat";


@Injectable()
export class FirebaseAppService {

  constructor( private firebaseAuth: AngularFireAuth ) { }

  public async signIn(email: string, password: string): Promise<void> {
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.user));
      })
  }

  public async signUp(email: string, password: string): Promise<void> {
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
      .then(response => localStorage.setItem('user',JSON.stringify(response.user)))
  }

  public logout(): void {
    this.firebaseAuth.signOut()
      .then(res => localStorage.removeItem('user'));
  }

  public getCurrentUser() : Observable< UserInterface | null >{
    return  this.firebaseAuth.authState;
  }
}
