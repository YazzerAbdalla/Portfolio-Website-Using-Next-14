import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
// @ts-ignore: side-effect CSS import without type declarations
import "./globals.css";
// @ts-ignore: side-effect CSS import without type declarations
import "@/public/preload/preload.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import ScrollToTopBtn from "@/components/ScrollToTopBtn";
import Script from "next/script";

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
        <Script id="gtm-script" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PZBQMGGS');
        `}</Script>
      </head>
      <body className={`${jetbrainsMono.variable} font-primary`}>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZBQMGGS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <StairTransition />

        <div className="xl:px-24 px-6">
          <Header />
          <TooltipProvider delayDuration={100}>
            <PageTransition>{children}</PageTransition>
            <ScrollToTopBtn />
          </TooltipProvider>
        </div>
      </body>
    </html>
  );
}
