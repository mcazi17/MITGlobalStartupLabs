import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController, LoadingController } from 'ionic-angular';

//Firebase Auth
// import { AngularFireAuth } from "angularfire2/auth";
import { AuthenticationProvider } from './../../providers/authentication/authentication';

//Models
import { UserModel, ProfileModel } from './../../models/index.models';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as UserModel;
  profile = {} as ProfileModel;
  repeatedPassword: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private menuCtrl: MenuController, private toastCtrl: ToastController, 
    private loadingCtrl: LoadingController, private authProvider: AuthenticationProvider) {
    menuCtrl.enable(false);
    this.profile.firstName = '';
    this.profile.lastName = '';
    this.profile.street = '';
    this.profile.houseNo = '';
    this.profile.city = '';
    this.profile.state = '';
    this.profile.zipcode = '';
    this.profile.phone = '';
    this.profile.picture = '';
    this.user.email = '';
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
        this.profile.email = this.user.email;
        this.authProvider.createProfile(this.profile);
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
