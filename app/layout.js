/** @format */
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import FloatingCTA from "@/components/FloatingCTA"

export const metadata = {
  title: "Pastel Pixels Studio",
  description: "Premium templates and custom HTML and Framer web development",
  icons: {
    icon: "/favicon.ico", // або .ico
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png", // якщо буде
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P7LH0WG3YY"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P7LH0WG3YY');
          `}
        </Script>
      </head>
      <body>
        <CustomCursor />
        <Navbar />
        {children}
        <FloatingCTA />
        <Footer />
      </body>
    </html>
  );
}
