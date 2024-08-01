import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Layout";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hazibal suites",
  description: "Hotel and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Sidebar>
        {children}
        </Sidebar>
      </body>
    </html>
  );
}
