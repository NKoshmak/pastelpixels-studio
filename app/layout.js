/** @format */

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Pastel Pixels Studio",
  description: "Premium templates and custom development",
  icons: {
    icon: "/favicon.ico",      // або .ico
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png", // якщо буде
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body>
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
