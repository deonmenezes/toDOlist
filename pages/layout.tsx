// layout.tsx
"use client";

import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import Login from "./Login";
import Home from "./page";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? <Login /> : <Home />}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
