import Keycloak from 'keycloak-js';

export const keycloak = new Keycloak({
  url: 'http://localhost:8180/auth',
  realm: 'master',
  clientId: 'my-phaser-game'
});

export async function initKeycloak(): Promise<void> {
  return new Promise((resolve, reject) => {
    keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
      if (authenticated) {
        console.log('Authenticated');
        resolve();
      } else {
        console.warn('Not authenticated');
        keycloak.login();
      }
    }).catch((err) => {
      console.error('Failed to initialize Keycloak', err);
      reject(err);
    });
  });
}