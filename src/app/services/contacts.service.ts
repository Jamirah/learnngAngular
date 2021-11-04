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
      phoneNumber: '(000)000-0000',
      email: 'j@gmail.com',
    },
    {
      firstName: 'DeRonnie',
      lastName: 'Ford',
      phoneNumber: '(000)000-0000',
      email: 'D@gmail.com',
    },
    {
      firstName: 'Jamialah',
      lastName: 'Carroll',
      phoneNumber: '(000)000-0000',
      email: 'j@yahoo.com',
    },
  ];

  constructor() {}
}
