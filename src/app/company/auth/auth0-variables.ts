interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'APBvL9Popl0ATy4z2CUYG5DLTc2Q5xFG',
  domain: 'pocss.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};