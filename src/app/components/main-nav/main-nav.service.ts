import { OnInit, Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ContentPage } from '../content-page/content-page.interface';

@Injectable()
export class MainNavService {
  page: Observable<ContentPage[]>;
  pageCollection: AngularFirestoreCollection<ContentPage>;

  constructor(private afs: AngularFirestore) {}

  getData() {
    this.pageCollection = this.afs.collection('content-pages', ref => {
      return ref.orderBy('id');
    });
    return this.pageCollection.valueChanges();
  }

  resolve() {
    this.getData();
  }
}
