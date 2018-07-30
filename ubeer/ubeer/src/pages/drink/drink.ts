import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.afDb.object(`drinks/alcohol/${this.categoryKey}`)
    //   .valueChanges().subscribe(establishment => {
    //     this.drink = establishment;
    //     console.log(this.drink.name);
    //   }
    // );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DrinkPage');
  }

}
