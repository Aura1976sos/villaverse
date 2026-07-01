import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Villaverse Earning",
  description:
    "Digital engagement marketplace for advertisers, creators, churches, organizers, and earners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--bg)] text-[var(--text)] antialiased">
        {children}
      </body>
    </html>
  );
}
