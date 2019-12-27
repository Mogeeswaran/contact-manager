import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { Routes, RouterModule } from '@angular/router';

const CONTACT_ROUTES: Routes = [
  {path:'contacts', children: [
    { path: '', component: ContactsComponent },
    { path: 'add', component: AddContactComponent },
    { path: ':id', component: ContactDetailsComponent }
  ]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(CONTACT_ROUTES) //registring child routes
  ],
  exports: [
    RouterModule //configured child routes are exported
  ]
})
export class ContactRoutingModule { }
