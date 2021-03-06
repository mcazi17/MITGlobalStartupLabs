import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Pages
import { HomePage } from '../home/home';
import { DrinksCategoriesPage } from'../drinks-categories/drinks-categories';
import { OthersPage } from '../others/others';
import { ProfilePage } from '../index.pages';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  home = HomePage;
  drinks = DrinksCategoriesPage;
  others = OthersPage;  
  config = ProfilePage;

}
