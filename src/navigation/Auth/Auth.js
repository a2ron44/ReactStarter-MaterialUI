import React, { Component } from "react";
import auth0 from "auth0-js";
import http from "services/http";

import { AUTH_CONFIG } from "./authConfig";
import { AuthProvider } from "./authContext";

const auth = new auth0.WebAuth({
  domain: AUTH_CONFIG.domain,
  clientID: AUTH_CONFIG.clientId,
  redirectUri: AUTH_CONFIG.callbackUrl,
  audience: `https://${AUTH_CONFIG.domain}/userinfo`,
  responseType: "token id_token",
  scope: "openid profile email",
});

class Auth extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.setSession = this.setSession.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.isInRole = this.isInRole.bind(this);
    // setup http header
    http.setJwt(this.getIdToken());
  }

  state = {
    profile: {},
  };

  login = () => {
    auth.authorize();
  };

  handleAuthentication = () => {
    auth.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        window.location = "/portfolio";
      } else if (err) {
        console.log(err);

        window.location = "/";
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  };

  setSession(authResult) {
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    const profile = {
      email: authResult.idTokenPayload.email,
      given_name: authResult.idTokenPayload.given_name,
      roles: authResult.idTokenPayload[AUTH_CONFIG.roleUrl],
    };

    localStorage.setItem("idToken", authResult.idToken);
    localStorage.setItem("expiresAt", expiresAt);
    localStorage.setItem("profile", JSON.stringify(profile));

    this.setState({
      profile,
    });
  }

  logout = () => {
    localStorage.removeItem("idToken");
    localStorage.removeItem("expiresAt");
    localStorage.removeItem("profile");
    // logout session on Auth0
    this.setState({
      profile: {},
    });
    const returnUrl = encodeURIComponent(AUTH_CONFIG.loginRedirect);
    window.location = `https://${AUTH_CONFIG.domain}/v2/logout?returnTo=${returnUrl}&client_id=${AUTH_CONFIG.clientId}`;
  };

  getProfile() {
    if (this.isLoggedIn() && this.state.profile && this.state.profile.email) {
      return this.state.profile;
    }
    return JSON.parse(localStorage.getItem("profile"));
  }

  getIdToken() {
    return localStorage.getItem("idToken");
  }

  isLoggedIn() {
    const expiresAt = localStorage.getItem("expiresAt");
    const token = localStorage.getItem("idToken");
    return token && new Date().getTime() < expiresAt;
  }

  isInRole(roleName) {
    const profile = this.getProfile();
    if (this.isLoggedIn() && profile && roleName === "Any") {
      return true;
    }
    if (this.isLoggedIn() && profile && profile.roles) {
      return profile.roles.indexOf(roleName) > -1;
    }
    return false;
  }

  render() {
    const authProviderValue = {
      ...this.state,
      login: this.login,
      logout: this.logout,
      isLoggedIn: this.isLoggedIn,
      getProfile: this.getProfile,
      getIdToken: this.getIdToken,
      isInRole: this.isInRole,
      handleAuthentication: this.handleAuthentication,
    };
    return (
      <AuthProvider value={authProviderValue}>
        {this.props.children}
      </AuthProvider>
    );
  }
}

export default Auth;
