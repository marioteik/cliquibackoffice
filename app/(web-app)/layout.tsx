import "../globals.css";

import { Inter } from "next/font/google";

import { Toaster } from "@/components/atoms/Toast/toaster";
import { TooltipProvider } from "@/components/atoms/Tooltip";
import Layout from "@/components/templates/Layout";

export const metadata = {
  title: "MMS 3.0",
  description:
    "A simple Next.js app with Vercel Postgres as the database and Drizzle as the ORM",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={`${inter.variable} min-h-screen`}>
        <TooltipProvider>
          <Layout>{children}</Layout>
        </TooltipProvider>
        <Toaster />
      </body>
    </html>
  );
}
