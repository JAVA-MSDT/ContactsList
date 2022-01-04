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

// loader module
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FontAwesomeModule,
  ],
  exports: [
    HttpClientModule,
    MenuComponent,
    RouterModule,
    FormsModule,
    TranslateModule,
    FontAwesomeModule
  ],
  providers: [TranslateService],
})
export class SharedModule {}
