import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

//Firebase
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

//Provider
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  loginPage = LoginPage;
  profile;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private authProvider: AuthenticationProvider, private afDb: AngularFireDatabase, 
    private afAuth: AngularFireAuth, private app: App) {

  }

  ionViewDidLoad() {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDb.object(`profile/${auth.uid}`).valueChanges().subscribe(profile => {
        this.profile = profile;
        // this.profile.picture = this.viewFile(this.profile.picture);
      });
      console.log(this.profile);
    });
  }

  logout(){
    this.authProvider.signOut();
    this.app.getRootNav().setRoot(LoginPage);
  }

}
