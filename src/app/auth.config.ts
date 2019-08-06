import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'https://foursquare.com/oauth2/authenticate',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/trending',

  // The SPA's id. The SPA is registered with this id at the auth-server
  clientId: 'ONTL5ZVUZJOSA0MGHGZD2NWIKXQFZNAJYGKGIK4VQ44GQAE0',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email voucher',
}