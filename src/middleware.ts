import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: "/login",
  },
})

export const config = {
  matcher: [
    "/crear-cancion/:path*",
    "/profile/:path*",
    "/songs/:path*",
  ],
}
