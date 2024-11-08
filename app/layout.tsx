import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ViewCanvas from "./components/ui/ViewCanvas";

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


const alpino = localFont({
  src: "../public/fonts/Alpino-Variable.woff2",
  display: "swap",
  weight: "100 900",
  variable: "--font-alpino",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-yellow-300`}
      >
        <ViewCanvas />
        {children}
      </body>
    </html>
  );
}
