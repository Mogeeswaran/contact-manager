import { Component, OnInit } from '@angular/core';
import { AccountDataService } from '../shared/services/account-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit{
  accountName;
  accountSub: Subscription;
  constructor(private accountDataService: AccountDataService) { }

  ngOnInit() {
    this.accountSub = this.accountDataService.latestAccountName.subscribe((name: any) => {
      console.log(name);
      this.accountName = name;
    });

  }

  ngOnDestroy() {
    console.log('Into Destroy Lifecycle hook');
    // ideal place for us to unscubscribe and empty the data
    this.accountSub.unsubscribe();
    this.accountName = null;
  }

}
