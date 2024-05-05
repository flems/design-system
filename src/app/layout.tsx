import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.scss";

const openSans = Open_Sans({ subsets: ['cyrillic', 'latin'] });

export const metadata: Metadata = {
  title: "Design system",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        {children}
      </body>
    </html>
  );
}
