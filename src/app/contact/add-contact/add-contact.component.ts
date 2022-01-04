import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/shared/domains/contact';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'cts-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  loading: boolean = false;
  newContact: any;
  readonly contactsApi = 'contacts';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    this.loading = true;
    const formValues = Object.assign({}, form.value);

    const contact: Contact = {
      name: `${formValues.firstName} ${formValues.lastName}`,
      address: formValues.address,
      phone: `${formValues.areaCode} ${formValues.prefix}-${formValues.lineNumber}`,
      photoUrl: formValues.photo,
    };

    const headers = new HttpHeaders();
    headers.append('content-type', 'application/json');
    this.http
      .post(`${environment.BASE_URL}/${this.contactsApi}`, contact, { headers })
      .subscribe((data) => {
        console.log(data);
        form.reset();
        this.loading = false;
        this.newContact = data as Contact;
      });
  }
}
