import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yasser's portfolio",
  description: "I will help you to perform your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/man.ico" />
      </head>
      <body className={jetbrainsMono.className}>
        <StairTransition />

        <div className="xl:px-24 px-6">
          <Header />
          <PageTransition>{children}</PageTransition>
        </div>
      </body>
    </html>
  );
}
