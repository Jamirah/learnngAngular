import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contacts: Contact[] = [
    {
      firstName: 'Khalilah',
      lastName: 'Boyd',
      phoneNumber: '(610)931-8519',
      email: 'jmccloudrealty@gmail.com',
    },
    {
      firstName: 'DeRonnie',
      lastName: 'Ford',
      phoneNumber: '(470)642-0750',
      email: 'Deronnieford101@gmail.com',
    },
    {
      firstName: 'Jamialah',
      lastName: 'Carroll',
      phoneNumber: '(215)688-6588',
      email: 'jamialah@yahoo.com',
    },
  ];

  constructor() {}
}
