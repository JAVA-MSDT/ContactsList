import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { COMMON_CONSTANTS, ROUTER_CONSTANTS } from './app-config/app.conestant';
import { AddContactComponent } from './contact/add-contact/add-contact.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './shared/login/login.component';

const routes: Routes = [
  {
    path: COMMON_CONSTANTS.EMPTY_STRING,
    redirectTo: ROUTER_CONSTANTS.LOGIN,
    pathMatch: ROUTER_CONSTANTS.MATCH_FULL,
  },
  {
    path: ROUTER_CONSTANTS.LOGIN,
    component: LoginComponent,
  },
  {
    path: ROUTER_CONSTANTS.CONTACTS,
    component: ContactListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ROUTER_CONSTANTS.NEW,
    component: AddContactComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ROUTER_CONSTANTS.ANY_PAGE,
    redirectTo: ROUTER_CONSTANTS.CONTACTS
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
