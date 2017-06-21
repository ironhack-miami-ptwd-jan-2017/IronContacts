import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  newContact: Contact;
  selectedField: string = "name";
  pattern: string = "";

  constructor() { }

  ngOnInit() {

    //contactList: Object[]
    //contacts: Contact[]
    //we're converting from Object[] to Contact[]
    contactList.forEach((contact: Object) => {

      let convertedContact: Contact = new Contact(contact["name"], contact["email"], contact["phoneNumber"], contact["image"]);

      this.contacts.push(convertedContact);

      this.newContact = new Contact("", "", "", "");
    });

  }

  addContact(){

    //this.contacts.unshift(this.newContact);
    console.log("Before add contact: " + this.contacts.length);
    this.contacts.unshift(this.newContact);
    console.log("After add contact: " + this.contacts.length);
    //console.log()

    this.newContact =  new Contact("", "", "", "");

    /*
    setTimeout(function () {
          console.log('Test');
          this.newContact.blankContact();
      }, 1000);
    //this.newContact.blankContact();
    */

  }
}
