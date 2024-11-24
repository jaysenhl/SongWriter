import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/crear-cancion/:path*',
    '/api/protected/:path*'
  ]
};

export default withMiddlewareAuthRequired();
