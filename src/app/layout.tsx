import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atik Faysal | Mobile App Developer - Android & Flutter",
  description: "Explore the portfolio of Atik Faysal, an experienced Mobile App Developer building high-performance Android and cross-platform applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background text-foreground antialiased")} suppressHydrationWarning>
        <Navbar />
        <main className="flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
