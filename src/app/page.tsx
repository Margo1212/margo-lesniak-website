import { AboutSection } from "@lib/views/AboutSection";
import { Header } from "@lib/views/Header";
import { ServicesSection } from "@lib/views/ServicesSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <AboutSection />
        <ServicesSection />

        {/* <NewsSection news={news} />
        <ReviewsSection homepage={homepage} />
        <FaqSection homepage={homepage} />  */}
      </Suspense>
    </>
  );
}
