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

  activeCompany: string;
  activeCategory: string;
  activeYearsInBusiness: string;
  activeDescrition: string;
  activePhone: string;
  activeEmail: string;
  activeStreetAddress: string;
  activeCity: string;
  activeState: string;
  activeZipcode: string;

  constructor(private _firebaseService: FirebaseService) {}

  ngOnInit() {
    this._firebaseService.getBusiness().subscribe(businesses => {
      this.businesses = businesses;
    });

    this._firebaseService.getCategories().subscribe(categories => {
      this.categories = categories;
    });

  }

  changeState(state: string, key:string) {
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

  addBusiness(
    company: string,
    category: string,
    years_in_bussiness: string,
    descrition: string,
    phone: string,
    email: string,
    street_address: string,
    city: string,
    state: string,
    zipcode: string
  ) {
    var created_at = new Date().toString();
    var newBusiness = {
      company: company,
      category: category,
      years_in_bussiness: years_in_bussiness,
      descrition: descrition,
      phone: phone,
      email: email,
      street_address: street_address,
      city: city,
      state: state,
      zipcode: zipcode,
      created_at: created_at
    };
    console.log(newBusiness);
    
    this._firebaseService.addBusiness(newBusiness);
    this.changeState('default', '');
  }

  showEdit(business) {
    this.changeState('edit', business.$key);
    this.activeCompany = business.company;
    this.activeCategory = business.category;
    this.activeDescrition = business.descrition;
    this.activeYearsInBusiness = business.years_in_bussiness;
    this.activePhone = business.phone;
    this.activeEmail = business.email;
    this.activeStreetAddress = business.street_address;
    this.activeCity = business.city;
    this.activeState = business.state;
    this.activeZipcode = business.zipcode;
    console.log(business);
    
  }

  updateBusiness() {
    var updateBussiness = {
      company: this.activeCompany,
      category: this.activeCategory,
      years_in_business: this.activeYearsInBusiness,
      description: this.activeDescrition,
      phone: this.activePhone,
      email: this.activeEmail,
      street_address: this.activeStreetAddress,
      city: this.activeCity,
      state: this.activeState,
      zipcode: this.activeZipcode
    }

    this._firebaseService.updateBusiness(this.activeKey, updateBussiness);
    this.changeState('default', '');
  }

  deleteBusiness(key) {
    this._firebaseService.deleteBusiness(key);
    this.changeState('default', '');
  }
}
