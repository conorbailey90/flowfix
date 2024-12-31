import type { Metadata } from "next";
import localFont from "next/font/local";
import { Orbitron } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from 'sonner'

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FlowFix Plumbing | Professional Plumbing Services",
  description: "Expert plumbing services delivered with precision and care. Serving residential and commercial clients since 2003.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${geistMono.variable} antialiased font-sans`}>
        <Header />
        {children}
        <Footer />
        <Toaster 
          position="bottom-right"
          toastOptions={{
            style: {
              background: 'hsl(var(--secondary))',
              color: 'hsl(var(--foreground))',
              border: '1px solid #0EA5E9',
            },
          }}
        />
      </body>
    </html>
  );
}
