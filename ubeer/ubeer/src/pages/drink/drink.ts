import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { DataProvider } from '../../providers/data/data';

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
  cartNo: number = this.dataProvider.getCartNo();
  isCartEmpty: boolean = this.dataProvider.getIsCartEmpty();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afDb: AngularFireDatabase, public loadingCtrl: LoadingController,
    private dataProvider: DataProvider) {
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

  addToCart(key: string) {
    this.cartNo++;
    this.isCartEmpty = false;
    // this.dataProvider.setIsCartEmpty(false);
    // this.dataProvider.addToCart(1);

    // this.cartNo = this.dataProvider.getCartNo();
    // console.log(this.cartNo);
    // this.isCartEmpty = this.dataProvider.getIsCartEmpty();
    // console.log(this.isCartEmpty);
  }

}
