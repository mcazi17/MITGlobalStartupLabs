import { Injectable } from '@angular/core';

import { UserModel } from './../../models/user.interface';

//angular fire imports
// import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

//firebase authentication
// import { User, Promise } from 'firebase/app'

//TODO: use this providers
import { NavController, ToastController, LoadingController } from 'ionic-angular';

@Injectable()
export class AuthenticationProvider {
  
  // user: User;

  constructor(private afAuth: AngularFireAuth, private toastCtrl: ToastController) {
    // afAuth.authState.subscribe((user: User) => {
    //   this.user = user;
    // });
  }

  createUserWithEmailAndPassword(userModel: UserModel): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(userModel.email, userModel.password);
  }

  signInWithEmailAndPassword(userModel: UserModel): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(userModel.email, userModel.password);
  }

  showToast(text: string) {
    this.toastCtrl.create({
      message: text,
      duration: 2500

    }).present();
  }

  authRegisterErrorsSpanish(error){
    if (error.message.includes("The email address is badly formatted")) {
      this.showToast("El email tiene un formato erroneo.");
    } else if (error.message.includes("The email address is already in use by another account.")) {
      this.showToast("Este email está en uso actualmente.");

    } else if (error.message.includes("A network error (such as timeout, interrupted connection or unreachable host) has occurred.")) {
      this.showToast('No hay conexión a internet.');
    } else {
      console.log(error);
      this.showToast("Ha ocurrido un error inesperado. Por favor intente nuevamente.")
    }
  }

  authLoginErrorsSpanish(error){
    if (error.message.includes("There is no user record corresponding to this identifier")) {
      this.showToast('Usuario inexistente.');
    } else if (error.message.includes("The password is invalid")) {
      this.showToast('Contraseña incorrecta.');
    }
    else {
      this.showToast('Ha ocurrido un error inesperado. Por favor intente nuevamente.');
    }
    console.log(error);
  }
}
