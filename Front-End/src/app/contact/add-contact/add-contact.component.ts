import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  faCheckDouble,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Contact } from 'src/app/shared/domains/contact';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'cts-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  loading: boolean = false;
  newContact: any;
  readonly contactsApi = 'contacts';
  faCheckDouble = faCheckDouble;
  faTimesCircle = faTimesCircle;
  constructor(private apiService: ApiService) {}

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

    this.apiService.post(this.contactsApi, contact).subscribe((data) => {
      console.log(data);
      form.reset();
      this.loading = false;
      this.newContact = data as Contact;
    });
  }
}
