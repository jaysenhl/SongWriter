import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
  login: handleLogin({
    returnTo: '/',
    authorizationParams: {
      screen_hint: 'login'  // This forces the login screen without registration
    }
  })
});
