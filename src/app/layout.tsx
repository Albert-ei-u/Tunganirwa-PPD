import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PPD Property Dashboard",
  description: "Modern Property Management Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        <div style={{ marginLeft: "var(--sidebar-width)", paddingTop: "var(--header-height)" }}>
          <Header />
          <main style={{ padding: "32px 40px", minHeight: "calc(100vh - var(--header-height))" }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
