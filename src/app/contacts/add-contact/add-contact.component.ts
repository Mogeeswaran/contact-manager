import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  isSaved: boolean;
  // Step1:create formGroup
  contactForm: FormGroup;

  // 1.connect to the service 
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    // Step2 Instatiate it with object
    this.contactForm=new FormGroup({
      // Step 3: Create FormControls
      name: new FormControl('',Validators.required),  //Step6 Add Validators
      email: new FormControl('',[Validators.required,
                                 Validators.email]),
      phone: new FormControl('',Validators.required)
    });
  }

  async onCreateContact(){
    console.log(this.contactForm.value);
    // 2. pass the data to service
    // this.contactService.createContact(this.contactForm.value)
    // .subscribe( (res:any) => {// 3. get the respone from the service 
    //   console.log(res);
    //  4. patch the resp with html
    //   if(res && res.id){
    //     this.isSaved = true;
    //   }
    // })

    // 2. pass the data to service
    const status: any = await this.contactService.createContact(this.contactForm.value);// 3. get the respone from the service 
    console.log(status);

    if(status && status.id){//  4. patch the resp with html
      this.isSaved = true;
    }

  }

}
