
import Link from "next/link";
import "./globals.css";
import { signOut } from "@/auth";
import { SessionProvider } from 'next-auth/react'



export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className="h-[100vh] bg-secondary-100">
        
          
            {children}
        
          
        </body>
      </SessionProvider>
    </html>
  );
}
