import Keycloak from 'keycloak-js';

export default class KeycloakManager {
  private static keycloak: Keycloak;

  public static init() {
    if (this.keycloak)
      return;

    this.keycloak = new Keycloak({
      realm: "usager",
      // @ts-ignore
      "auth-server-url": "http://localhost:8180/auth/",
      "ssl-required": "external",
      clientId: "frontend",
      "public-client": true,
      "confidential-port": 0
    });

    this.keycloak.init({ onLoad: 'login-required' })
      .then((authenticated) => {
        if (authenticated) {
          console.log('Authenticated');
          console.log('Token:', this.keycloak.token); // Log the token
          console.log(this.keycloak);
        } else {
          console.warn('Not authenticated');
          this.keycloak.login();
        }
      })
      .catch((err) => {
        console.error('Failed to initialize Keycloak', err);
      });
  }

  public static getUsername(): string {
    return this.keycloak.idTokenParsed?.preferred_username;
  }
}
