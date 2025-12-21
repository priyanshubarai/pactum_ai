import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Pactum.ai",
  description: "Build by TEAM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
