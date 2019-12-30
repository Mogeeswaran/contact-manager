import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Contact } from './contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // REST_API_URL = 'https://jsonplaceholder.typicode.com/users';
  REST_API_URL = 'http://localhost:3000/api/contacts';

  constructor(private http: HttpClient) { }

  // 1.get data from comp
  createContact( contactData: any ){
    console.log(contactData);
     // 2.send data to rest api
    // 2.1 Identify the REST API URL
    // 2.2 HTTP Method: POST
    // return this.http.post(this.REST_API_URL, contactData)
    // .pipe( map((res: any) =>{// 3.get resp from rest api
    //   console.log(res);
    //   // 4.send it back to comp
    //   return res;
    // }));

    const createContactPromise = new Promise( (resolve, reject) =>{
      this.http.post(this.REST_API_URL, contactData)
            .toPromise()
            .then( ( res: Contact) => {
              console.log(res);
              resolve(res);
            })
            .catch( (err: any) => {
              console.log(err);
              reject(err);
            })
            .finally( () =>{
              console.log('Its Over');
            });
    } );

    return createContactPromise as Promise<Contact>;

    
  }

  getContacts(): Observable<Contact[]>{
    return this.http.get(this.REST_API_URL)
    .pipe( map((res: Contact[]) =>{
        console.log(res);      
        return res;
      }));
  }

  getContactByID(id:number): Observable<Contact>{
    return this.http.get(this.REST_API_URL+"/"+id)
    .pipe( map((res: Contact) =>{
      console.log(res);      
      return res;
    }));
  }

  updateContact(upddateableContactData){
    console.log(upddateableContactData.contactId);

    const updateContactPromise = new Promise( (resolve, reject) =>{  
      this.http.put(this.REST_API_URL+'/'+upddateableContactData.contactId, upddateableContactData)
        .toPromise()
        .then((res: any) => {
          console.log(res);
          resolve(res);
        })
        .catch((err: any) => {
          console.log(err);
          reject(err);
        })
        .finally(() => {
          console.log('Its Over');
        });
    });
    return updateContactPromise as Promise<any>;

  }

  
 
}
