import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController, LoadingController } from 'ionic-angular';

//Firebase Auth
// import { AngularFireAuth } from "angularfire2/auth";
import { AuthenticationProvider } from './../../providers/authentication/authentication';

//Models
import { UserModel } from './../../models/user.interface';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as UserModel;
  repeatedPassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private menuCtrl: MenuController, private toastCtrl: ToastController, 
    private loadingCtrl: LoadingController, private authProvider: AuthenticationProvider) {
    menuCtrl.enable(false);
    this.user.firstName = '';
    this.user.lastName = '';
    this.user.street = '';
    this.user.houseNo = '';
    this.user.city = '';
    this.user.state = '';
    this.user.zipcode = '';
    this.user.phone = '';
    this .user.email = '';
    this.user.password = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  
  addUser() {
    if (this.user.password != this.repeatedPassword) {
      this.authProvider.showToast("Las contraseñas no coinciden. Inténtelo de nuevo.")

    } else {
      let loading = this.loadingCtrl.create({
        content: 'Creando cuenta. Por favor, espere...'
      });
      loading.present();

      this.authProvider.createUserWithEmailAndPassword(this.user).then(result => {
        loading.dismiss();
        this.authProvider.showToast("Registrado con éxito.")
        this.navCtrl.pop();

      }).catch(error => {
        loading.dismiss();
        this.authProvider.authRegisterErrorsSpanish(error);
      });
    }

  }
}
