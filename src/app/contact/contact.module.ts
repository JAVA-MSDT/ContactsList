import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContactListComponent, ContactComponent, AddContactComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [ContactListComponent, ContactComponent, AddContactComponent],
})
export class ContactModule {}
