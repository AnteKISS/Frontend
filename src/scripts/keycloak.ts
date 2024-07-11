import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8180/auth',
  realm: 'Master',
  clientId: 'my-phaser-game'
});

export async function initKeycloak(): Promise<void> {
  try {
    await keycloak.init({ onLoad: 'login-required' });
    console.log('Keycloak initialized');
  } catch (error) {
    console.error('Failed to initialize Keycloak', error);
    throw error;
  }
}

export { keycloak };