import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {
  faUser,
  faUsers,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { LANG_CONSTANTS } from 'src/app/app-config/app.conestant';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'cts-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  faUsers = faUsers;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  constructor(
    private translate: TranslateService,
    public authService: AuthService
  ) {
    translate.setDefaultLang(LANG_CONSTANTS.EN);
    this.useLanguage(LANG_CONSTANTS.EN);
  }

  ngOnInit(): void {}

  useLanguage(lang: string): void {
    this.translate.use(lang);
  }

  logout(): void {
    this.authService.logout();
  }
}
