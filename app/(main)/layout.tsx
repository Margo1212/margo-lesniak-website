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
  title: "Margo Lesniak | Strony internetowe",
  description: "",
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
        <script
          src="//code.tidio.co/ndiivhrmxqb1eqe8u6vaxnbevzj7a7ho.js"
          async
        ></script>
      </head>
      <body
        className={`px-2 tablet:px-5 laptop:px-12 desktop:px-40 bg-main-bg ${lato.className}`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
