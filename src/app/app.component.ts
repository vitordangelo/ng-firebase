import { Category } from './category';
import { Business } from './business';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  businesses: Business[];
  categories: Category[];
  appState: string;
  activeKey: string;

  constructor(private _firebaseService: FirebaseService) {}

  ngOnInit() {
    this._firebaseService.getBusiness().subscribe(businesses => {
      this.businesses = businesses;
    });

    this._firebaseService.getCategories().subscribe(categories => {
      this.categories = categories;
    });

  }

  changeState(state, key) {
    console.log("Changing state to:"+state);
    
    if(key) {
      console.log("Changing skey:" + key);
      this.activeKey = key;
      window.scrollTo(0, 0);
    } 
    this.appState = state; 
  }

  filterCategory(category) {
    this._firebaseService.getBusiness(category).subscribe(businesses => {
      this.businesses = businesses;
    });
  }
}
