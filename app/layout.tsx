import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "./components/ui/fonts";

export const metadata: Metadata = {
  title: "StickyChipMine",
  description: "A blockchain way to interacte with others and make friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
