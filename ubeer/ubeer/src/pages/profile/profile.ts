import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Observable } from "rxjs/Observable";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile;

  constructor(public navCtrl: NavController, public iab: InAppBrowser,
    public navParams: NavParams, private dataProvider: DataProvider,
    private afDb: AngularFireDatabase, private afAuth: AngularFireAuth) {

  }

  ionViewDidLoad() {
    this.afAuth.authState.take(1).subscribe(auth => {
      this.afDb.object(`profile/${auth.uid}`).valueChanges().subscribe(profile => {
        this.profile = profile;
      });
      console.log(this.profile);
    });
  }

  viewFile(url) {
    this.iab.create(url);
  }

}
