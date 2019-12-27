import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountDataService {

  // Step 1:
accountName = 'Mogee';

// Step2: Create Behaviour Subject with default value for subscribing for 
private myAccount = new BehaviorSubject<any>(this.accountName);

// Step 3: Create Observable for the Behaviout subject
//  so any compnent can subscribe to it.

latestAccountName: Observable<any> = this.myAccount.asObservable();

  constructor() { }

  // sending next value over the private variable so components that are subscribing will be getting new value
  updateAccountName(updateableAccountName){
    console.log(updateableAccountName);
    this.myAccount.next(updateableAccountName);

  }
}
