import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

//Firebase
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-drinks',
  templateUrl: 'drinks.html',
})
export class DrinksPage {

  categoryKey;
  drinks = [];
  drinksReference;
  loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afDb: AngularFireDatabase, public loadingCtrl: LoadingController) {
    this.categoryKey = this.navParams.get('key');
    console.log(this.categoryKey);

    this.drinksReference = afDb.database.ref('/drinks/alcohol/' + this.categoryKey);

    this.showLoading();
    this.drinksReference.on('value', drinksList => {
      let drinksValues = [];
      drinksList.forEach(drinks => {
        drinks.val().key = drinks.key;

        drinksValues.push({
          $key: drinks.key,
          name: drinks.val().name,
          picture: drinks.val().picture,
          price: drinks.val().price,
          description: drinks.val().description
        });

        return false;
      });

      this.drinks = drinksValues;
      this.loading.dismiss();
    });
  }

  ionViewDidLoad() {
    // this.drinks = this.afDb.list('drinks/alcohol').valueChanges();
    // console.log(this.drinks);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
    });
    this.loading.present();
  }

  cardClicked(key: string) {
    console.log(key);
    // this.navCtrl.push(this.establishmentPP, { key });
  }

}