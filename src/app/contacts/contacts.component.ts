import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, OnDestroy {
  contactList: Contact[];
  contactsSubscription: Subscription;
  constructor(private contactService: ContactService) { }

  ngOnInit() {


    // ideal place for Ajax calls
    this.contactsSubscription = this.contactService.getContacts()
      .subscribe((res: Contact[]) => {
        console.log(res);
        this.contactList = res;

      });
  }

  ngOnDestroy() {
    console.log('Into Destroy Lifecycle hook');
    // ideal place for us to unscubscribe and empty the data
    this.contactsSubscription.unsubscribe();

    if (this.contactList && this.contactList.length > 0) {
      this.contactList.length = 0;
    }
  }


}
