import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountDataService } from '../shared/services/account-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit, OnDestroy {

  today: Date = new Date();
  accountName;
  accountSub: Subscription;

  dummyText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatem reprehenderit non tempora';
  
  constructor( private accountDataService: AccountDataService) { }

  ngOnInit() {
    // Step.4: Let's get the lates account name first and always
    this.accountSub = this.accountDataService.latestAccountName.subscribe((name : any) =>{
      console.log(name);
      this.accountName = name;
    })
  }

  onUpdateAccount() {
    this.accountDataService.updateAccountName(this.accountName + ' Zaveeth');
  }

  ngOnDestroy() {
    console.log('Into Destroy Lifecycle hook');
    // ideal place for us to unscubscribe and empty the data
    this.accountSub.unsubscribe();
    this.accountName = null;
  }

}