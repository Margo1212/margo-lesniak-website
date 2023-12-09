import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../styles/globals.css";
import Navigation from "@lib/components/Navigation/Navigation";
import { Footer } from "@lib/components/Footer/Footer";

const lato = Lato({
  weight: ["100", "300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Margo Lesniak | Strony internetowe",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="logo1.svg" sizes="any" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script
          src="//code.tidio.co/ndiivhrmxqb1eqe8u6vaxnbevzj7a7ho.js"
          async
        ></script>
      </head>
      <body className={lato.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
