import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import {Providers} from "./providers";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="PIxKjWdmRYycH8lY3fYCsI68nNJw8kIm0czw4C9gnsQ"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@6/swiper-bundle.min.css"
        />
      </Head>
      <body className="dark">
        <Navbar />
        <Providers>{children}</Providers>
        <SpeedInsights />
        <Analytics />
        <Script src="https://cdn.jsdelivr.net/npm/swiper@6/swiper-bundle.min.js" async></Script>

      </body>
    </>
  );
};

export const metadata = {
  title: "The SkyView Rooftop Multicuisine Restaurant",
  description: "Elevate Your Dining Experience",
};

export default RootLayout;
