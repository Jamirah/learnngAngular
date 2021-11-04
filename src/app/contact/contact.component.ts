import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 /*why did my computer make me put a ! here*/
  contacts!: Contact[];
  dataService: ContactsService;

 constructor(private contactsService: ContactsService) { 
    this.dataService =new ContactsService;

  }

  ngOnInit(): void {
    this.contacts= this.dataService.contacts
  }


}
