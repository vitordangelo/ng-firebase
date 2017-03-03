import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

import { FirebaseService } from './services/firebase.service';

export const firebaseConfig = {
  apiKey: "AIzaSyBd5w_JQLtcl2o4NkQeHlJgNRsuncdXIMM",
  authDomain: "udemy-contact-list.firebaseapp.com",
  databaseURL: "https://udemy-contact-list.firebaseio.com",
  storageBucket: "udemy-contact-list.appspot.com",
  messagingSenderId: "566365178791"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
