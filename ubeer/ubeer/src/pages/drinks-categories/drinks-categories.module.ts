import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrinksCategoriesPage } from './drinks-categories';

@NgModule({
  declarations: [
    DrinksCategoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(DrinksCategoriesPage),
  ],
})
export class DrinksCategoriesPageModule {}
