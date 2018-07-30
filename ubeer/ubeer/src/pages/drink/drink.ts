import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the DrinkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-drink',
  templateUrl: 'drink.html',
})
export class DrinkPage {

  drinkKey;
  categoryKey;
  drinksReference;
  loading;
  drink;
  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  //   this.afDb.object(`drinks/alcohol/${this.categoryKey}`)
  //     .valueChanges().subscribe(establishment => {
  //       this.drink = establishment;
  //       console.log(this.drink.name);
  //     }
  //   );
  // }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afDb: AngularFireDatabase, public loadingCtrl: LoadingController) {
    this.drinkKey = this.navParams.get('key');
    this.categoryKey = this.navParams.get('category');

    // this.drinksReference = afDb.database.ref('/drinks/alcohol/' + this.categoryKey);

    this.afDb.object(`drinks/alcohol/${this.categoryKey}/${this.drinkKey}`)
      .valueChanges().subscribe(drink => {
        this.drink = drink;
        console.log(this.drink.name);
      }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrinkPage');
  }

}
