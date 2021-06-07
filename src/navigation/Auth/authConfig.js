export const AUTH_CONFIG = {
  domain: process.env.REACT_APP_AUTH0_AUTH_DOMAIN,
  roleUrl: process.env.REACT_APP_AUTH0_AUTH_ROLES,
  clientId: process.env.REACT_APP_AUTH0_AUTH_CLIENT,
  callbackUrl: window.location.origin + "/callback",
  loginRedirect: window.location.origin + "/home",
};
