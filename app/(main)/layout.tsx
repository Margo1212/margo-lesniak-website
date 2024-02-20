import CookieConsent from "@/ui/components/Cookies/Cookies";
import "@/ui/styles/globals.css";
import { Footer } from "@components/Footer/Footer";
import Navigation from "@components/Navigation/Navigation";
import type { Metadata } from "next";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.margolesniak.pl/"),
  title: "Margo Lesniak | Strony internetowe",
  description:
    "Nowoczesne strony internetowe w harmonii z Twoimi oczekiwaniami",

  // added new keywords for seo
  keywords: [
    "Next.js",
    "React",
    "Strapi TypeScript",
    "Nowoczesne strony internetowe",
    "Responsywne projektowanie stron",
    "cms",
    "web development",
    "Zoptymalizowane strony dla SEO",
  ],
  authors: [
    {
      name: "Margo Leśniak",
      url: "https://github.com/Margo1212",
    },
  ],
  creator: "Margo Leśniak",

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://www.margolesniak.pl/",
    title: "Margo Leśniak | Strony internetowe",
    description:
      "Nowoczesne strony internetowe w harmonii z Twoimi oczekiwaniami",
    images: [`./og-image.png`],
    siteName: "margolesniak.pl",
  },
  // twitter: {
  //   handle: "@MargoLeśniak",
  //   site: "@MargoLeśniak",
  //   cardType: "summary_large_image",
  // },
  icons: {
    icon: "/favicon.ico",
  },
};

/**
 * Renders the root layout of the application.
 *
 * @param children - The children components to render.
 * @returns The rendered root layout.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="logo-min.svg" sizes="any" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="google-adsense-account" content="ca-pub-3187267560803211" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3187267560803211"
          crossOrigin="anonymous"
        ></script>
        <script
          src="//code.tidio.co/ndiivhrmxqb1eqe8u6vaxnbevzj7a7ho.js"
          async
        ></script>
      </head>
      <body
        className={`px-2 tablet:px-5 laptop:px-12 desktop:px-40 bg-main-bg ${lato.className}`}
      >
        <CookieConsent />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
