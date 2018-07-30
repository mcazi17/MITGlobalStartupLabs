import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MyApp } from './app.component';

//Pages
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth'
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule, AngularFireStorage } from 'angularfire2/storage'
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    LocationPage,
    DrinkPage,
    DrinksPage, 
    CartPage,
    OthersPage,
    PaymentPage,
    TabsPage,
    ProfilePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    LocationPage,
    DrinkPage,
    DrinksPage, 
    CartPage,
    OthersPage,
    PaymentPage,
    TabsPage,
    ProfilePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationProvider,
    DataProvider,
    InAppBrowser,
    AngularFireStorage
  ]
})
export class AppModule {}