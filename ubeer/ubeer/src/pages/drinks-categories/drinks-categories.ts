import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

//Firebase
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from 'angularfire2/database';
import { DrinksPage } from '../index.pages';

@IonicPage()
@Component({
  selector: 'page-drinks-categories',
  templateUrl: 'drinks-categories.html',
})
export class DrinksCategoriesPage {

  drinksPage = DrinksPage;
  categories = [];
  drinksReference;
  loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afDb: AngularFireDatabase, public loadingCtrl: LoadingController) {
    this.drinksReference = afDb.database.ref('/drinks/alcohol');

    this.showLoading();
    this.drinksReference.on('value', drinksList => {
      let categories = [];
      drinksList.forEach(drinks => {
        drinks.val().key = drinks.key;

        categories.push({
          $key: drinks.key
        });

        return false;
      });

      this.categories = categories;
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
    this.navCtrl.push(this.drinksPage, { key });
  }

}
