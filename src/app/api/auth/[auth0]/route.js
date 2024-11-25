import { handleAuth, handleLogin, handleCallback } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
  login: handleLogin({
    returnTo: '/',
    authorizationParams: {
      prompt: 'select_account',
      redirect_uri: process.env.AUTH0_BASE_URL + '/api/auth/callback'
    }
  }),
  callback: handleCallback({
    afterCallback: (req, res, session) => {
      return session;
    }
  })
});
