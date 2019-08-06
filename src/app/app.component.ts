import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'Restaurantly';

  public constructor(private titleService: Title, private oauthService: OAuthService) { 
    this.configure();
  }

  ngOnInit() {
    this.setTitle();
  }

  public setTitle() {
    this.titleService.setTitle(this.title);
  }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndLogin();
  }
}
