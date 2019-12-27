import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//firebase setup
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EditContactDialogComponent } from './contacts/contact-details/edit-contact-dialog/edit-contact-dialog.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ContactModule } from './contacts/contact.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AuthInterceptor } from './shared/interceptors/auth.interceptors';
import { EllipsisPipe } from './shared/pipes/ellipsis.pipe';
import { AboutComponent } from './about/about.component';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI7mYVzSBR_xSdoPtkDq_D4E1_4pzmLno",
  authDomain: "hexa-ng-auth-b2.firebaseapp.com",
  databaseURL: "https://hexa-ng-auth-b2.firebaseio.com",
  projectId: "hexa-ng-auth-b2",
  storageBucket: "",
  messagingSenderId: "333443086726",
  appId: "1:333443086726:web:a30008031375ca88c05407"
};

// material modules should reorganize in separate modules


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DemoComponent,
    EditContactDialogComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    EllipsisPipe,
    AboutComponent
    
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(firebaseConfig),   // will help us connect to firebase app 
    AngularFireAuthModule, // login 
    AngularFirestoreModule, // signup 

    FormsModule,
    HttpClientModule,
    ContactModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  entryComponents: [EditContactDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
