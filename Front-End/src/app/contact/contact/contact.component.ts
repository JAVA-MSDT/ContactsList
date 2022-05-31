import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Contact } from 'src/app/shared/domains/contact';

@Component({
  selector: 'cts-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;
  faPhone = faPhone;

  constructor() {}

  ngOnInit(): void {}
}
