import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

//Firebase
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from 'angularfire2/database';

//Pages
import { DrinkPage } from '../drink/drink';

//Providers
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-drinks',
  templateUrl: 'drinks.html',
})
export class DrinksPage {

  categoryKey;
  drinks = [];
  drinkPage = DrinkPage;
  drinksReference;
  loading;
  cartNo: number = this.dataProvider.getCartNo();
  isCartEmpty: boolean = this.dataProvider.getIsCartEmpty();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afDb: AngularFireDatabase, public loadingCtrl: LoadingController,
    private dataProvider: DataProvider) {
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

  drinkClicked(key: string) {
    console.log(key);
    this.navCtrl.push(this.drinkPage, { key: key, category: this.categoryKey });
  }

  addToCart(key: string) {
    this.dataProvider.setIsCartEmpty(false);
    this.dataProvider.addToCart(1);
  }

}