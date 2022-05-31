import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/shared/domains/contact';
import { ApiService } from 'src/app/shared/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'cts-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];
  readonly contactsApi = 'contacts';
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.get<Contact[]>(this.contactsApi)
      .subscribe((contactsResponse) => (this.contacts = contactsResponse));
  }
}
