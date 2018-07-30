import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class DataProvider {

  private cartNo: number;
  private isCartEmpty: boolean;

  addToCart(no: number) {
    this.cartNo = this.cartNo + no;
  }

  removeFromCart(no: number) {
    this.cartNo = this.cartNo + no;
  }

  getCartNo() {
    return this.cartNo;
  }

  setIsCartEmpty(option: boolean) {
    this.isCartEmpty = option;
  }

  getIsCartEmpty(){
    return this.isCartEmpty;
  }



  // getProfileInfo() {
  //   // this.afAuth.authState.take(1).subscribe(auth => {
  //   //   this.afDb.object(`profile/${auth.uid}`).valueChanges().subscribe(profile => {
  //   //     this.profile = profile;
  //   //   });
  //   //   console.log(this.profile);
  //   // });
  // }

  // getFiles() {
  //   let ref = this.afDb.list('profile');
  //   return ref.snapshotChanges().map(changes => {
  //     return changes.map(c => ({ key: c.payload, ...c.payload.val() }));
  //   });
  // }

  // storeInfoToDatabase(metainfo) {
  //   let toSave = {
  //     url: metainfo.downloadURLs[0],
  //     fullPath: metainfo.fullPath,
  //     contentType: metainfo.contentType
  //   }

  //   return this.db.list('files').push(toSave);
  // }

}
