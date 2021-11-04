import { EmailValidator } from '@angular/forms';

export class Contact {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;

  constructor(firstName: string, lastName: string, email: string, phoneNumber:string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
}
