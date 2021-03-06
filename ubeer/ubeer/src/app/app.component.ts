import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {
  HomePage, 
  ListPage, 
  LoginPage, 
  LocationPage, 
  DrinksPage, 
  OthersPage, 
  DrinkPage, 
  CartPage, 
  PaymentPage, 
  RegisterPage,
  TabsPage,
  ProfilePage,
} from '../pages/index.pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Login', component: LoginPage },
      // { title: 'Register', component: RegisterPage },
      { title: 'Location', component: LocationPage },
      { title: 'Drink', component: DrinkPage },
      { title: 'Drinks', component: DrinksPage },
      { title: 'Cart', component: CartPage },
      { title: 'Payment', component: PaymentPage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
