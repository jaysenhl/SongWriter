import localFont from "next/font/local";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Navbar from '@/components/layout/Navbar';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Song Writer",
  description: "Created By Ja1zen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <UserProvider>
          <Navbar />
          <main>
            {children}
          </main>
        </UserProvider>
      </body>
    </html>
  );
}
