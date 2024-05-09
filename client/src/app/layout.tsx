import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { cn } from "@/lib/utils";
import AuthProvider from "@/components/providers/auth/AuthProvider";
import QueryProvider from "@/components/providers/auth/reactQuery/QueryProvider";
import NextTopLoader from 'nextjs-toploader';
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Person-CRM App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextTopLoader/>
        <QueryProvider>
          
          <AuthProvider>
            <Toaster
              toastOptions={{
                style: {
                  padding: "10px",
                  width: "300px",
                  fontSize: "19px",
                  fontWeight: "normal",
                },
                position: "bottom-right",
                iconTheme: {
                  primary: "rgb(116, 110, 110)",
                  secondary: "#fff",
                },
              }}
              containerStyle={{
                bottom: 50,
                stopColor: "ActiveCaption",
                animationFillMode: "revert-layer",
              }}
            />
            <Navbar />
            <div className="mx-20 mt-20">{children}</div>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
