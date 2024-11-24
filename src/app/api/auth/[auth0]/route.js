import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
  login: handleLogin({
    returnTo: '/',
    authorizationParams: {
      screen_hint: 'login',  // This forces the login screen without registration
      max_age: 3600  // Session expires after 1 hour (3600 seconds)
    }
  })
});
