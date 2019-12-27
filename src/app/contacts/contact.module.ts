import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsComponent } from './contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactRoutingModule } from './contact-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactsComponent,
    AddContactComponent,
    ContactDetailsComponent    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule, //Router module should be added for routing should work
    ReactiveFormsModule,
    ContactRoutingModule  
  ]
})
export class ContactModule { }
