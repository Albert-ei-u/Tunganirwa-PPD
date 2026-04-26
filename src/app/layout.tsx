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
        {/* Main Content Wrapper */}
        <div className="ml-64 pt-[70px]">
          <Header />
          <main className="p-8 min-h-[calc(100vh-70px)] bg-background">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
