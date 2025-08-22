import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "@/public/preload/preload.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["600", "700"],
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
      <body className={`${jetbrainsMono.variable} font-primary`}>
        {/* <StairTransition /> */}

        <div className="xl:px-24 px-6">
          <Header />
          <TooltipProvider delayDuration={100}>
            <PageTransition>{children}</PageTransition>
          </TooltipProvider>
        </div>
      </body>
    </html>
  );
}
