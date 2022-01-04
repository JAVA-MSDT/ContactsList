import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/shared/domains/contact';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'cts-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  readonly contactsApi = 'contacts';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Contact[]>(`${environment.BASE_URL}/${this.contactsApi}`)
      .subscribe((contactsResponse) => (this.contacts = contactsResponse));
  }
}
