import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { poppins } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Music App",
  description: "Music App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.regular.className} "w-full h-screen grid grid-cols-12 grid-rows-12`} >
        <nav className="bg-secondary text-secondary-foreground row-span-12 col-span-2">sidebar</nav>
        <main className="row-span-12 col-span-10">{children}</main>
      </body>
    </html>
  );
}
