import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController, LoadingController  } from 'ionic-angular';

//Auth
import { AuthenticationProvider } from './../../providers/authentication/authentication';

//Models
import { UserModel } from './../../models/user.interface';

import { RegisterPage, HomePage, TabsPage } from '../index.pages';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as UserModel;
  registerPage = RegisterPage;
  homePage = HomePage;
  tabsPage = TabsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private menuCtrl: MenuController, private loadingCtrl: LoadingController, 
    private authProvider: AuthenticationProvider) {
    menuCtrl.enable(false);
    this.user.email = '';
    this.user.password = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    let loading = this.loadingCtrl.create({
      content: 'Iniciando sesión. Por favor, espere...'
    });
    loading.present();
    
    this.authProvider.signInWithEmailAndPassword(this.user).then(result => {
      loading.dismiss();
      this.menuCtrl.enable(true);
      this.navCtrl.setRoot(this.tabsPage);
      
    }).catch(error => {
      loading.dismiss();
      this.authProvider.authLoginErrorsSpanish(error);
    });
  }
}
