import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ContentPage } from './content-page.interface';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class ContentPageService {

  resolve(route: ActivatedRouteSnapshot) {
    const id = +route.paramMap.get('id');
    return this.getField('content-pages', id);
  }

  constructor(private db: AngularFirestore) {}

  getField(table: string, id: number) {
    const q = ref => ref.where('id', '==', id);
    return this.db.collection(table, q)
      .valueChanges()
      .first()
      .mergeMap(d => d);
  }
}
