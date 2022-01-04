import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'contacts', pathMatch: 'full' },
  {
    path: 'contacts',
    component: ContactListComponent,
  },
  {
    path: 'new',
    component: AddContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
