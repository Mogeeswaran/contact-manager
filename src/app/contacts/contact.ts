import { Injectable } from '@angular/core';

interface IContact{
    contactId:number;
    name: string;
    email: string;
    phone: string
}
@Injectable({
    providedIn: 'root'
})
export class Contact implements IContact{
    contactId: number;
    name: string;
    email: string;
    phone: string

    getRandom(){

    }
}
