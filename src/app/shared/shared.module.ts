import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactModule } from '../contact/contact.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';

// loader module
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const components = [MenuComponent, LoginComponent];
const modules = [
  HttpClientModule,
  RouterModule,
  FormsModule,
  FontAwesomeModule,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ...modules,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [...modules, ...components, TranslateModule],
  providers: [TranslateService],
})
export class SharedModule {}
