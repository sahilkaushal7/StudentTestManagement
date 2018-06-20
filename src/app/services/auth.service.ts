import { Injectable,OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import  { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(public afAuth:AngularFireAuth) { }

  // //google signin
  signInWithGoogle() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider())
}
//facebook signin
signInWithFacebook() {
  return this.afAuth.auth.signInWithPopup(
    new firebase.auth.FacebookAuthProvider()
  )
}
  // Login user
  login(email:string, password:string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => resolve(userData),
        err => reject(err));
    });
  }

  // Check user status
  getAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  // Logout User
  logout(){
    this.afAuth.auth.signOut();
  }
  register(email:string,password:string)
  {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email,password).then
      (userData => resolve(userData),
      err => reject(err))
    });
  }
  getAdmin()
  {
    
  }
  
}
