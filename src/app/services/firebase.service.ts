import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Category } from './../category';
import { Business } from './../business';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
  
  business: FirebaseListObservable<Business[]>;
  categories: FirebaseListObservable<Category[]>;

  constructor(private _af: AngularFire) {

  }

  getBusiness(category: string = null) {
    if(category != null) {
      this.business = this._af.database.list('/business', {
        query: {
          orderByChild: 'category',
          equalTo: category
        }
      }) as
        FirebaseListObservable<Business[]>
    } else {
        this.business = this._af.database.list('/business') as
            FirebaseListObservable<Business[]>
    }
   
    return this.business;
  }

  getCategories() {
    this.categories = this._af.database.list('/categories') as
    FirebaseListObservable<Category[]>
    return this.categories;
  }
}

