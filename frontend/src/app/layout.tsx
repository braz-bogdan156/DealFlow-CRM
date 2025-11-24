import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CRM App",
  description: "Clients & Deals management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-black`}
      >
        <header className="w-full bg-gray-900 text-white p-4 flex flex-wrap justify-center sm:justify-between">
          <Link href="/" className="flex-1 text-center">🏠 Home</Link>
          <Link href="/clients" className="flex-1 text-center">👥 Clients</Link>
          <Link href="/clients/create" className="flex-1 text-center">➕ Create Client</Link>
        </header>
        <main className="p-6">{children}</main>
        
        {/* Додайте ToastContainer */}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
