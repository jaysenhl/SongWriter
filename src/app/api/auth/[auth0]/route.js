import { handleAuth, handleLogin, handleCallback } from '@auth0/nextjs-auth0';

const AUTH0_DOMAIN = process.env.AUTH0_ISSUER_BASE_URL?.replace('https://', '');

export const GET = handleAuth({
  login: handleLogin({
    returnTo: '/',
    authorizationParams: {
      response_type: 'code',
      scope: 'openid profile email',
      prompt: 'select_account',
      redirect_uri: `${process.env.AUTH0_BASE_URL}/api/auth/callback`,
      domain: AUTH0_DOMAIN,
      client_id: process.env.AUTH0_CLIENT_ID
    }
  }),
  callback: handleCallback({
    afterCallback: (req, res, session) => {
      return session;
    }
  })
});
