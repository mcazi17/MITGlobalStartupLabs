import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthenticationProvider } from '../authentication/authentication';

@Injectable()
export class DataProvider {

  profile;

  constructor(private afAuth: AngularFireAuth, private afDb: AngularFireDatabase, 
    private afStorage: AngularFireStorage, private authProvider: AuthenticationProvider) {

  }

  getProfileInfo() {
    // this.afAuth.authState.take(1).subscribe(auth => {
    //   this.afDb.object(`profile/${auth.uid}`).valueChanges().subscribe(profile => {
    //     this.profile = profile;
    //   });
    //   console.log(this.profile);
    // });
  }

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
