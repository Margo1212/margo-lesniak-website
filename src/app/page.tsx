import { Budget } from "@lib/assets/svg/Budget";
import { Monitor } from "@lib/assets/svg/Monitor";
import { Tech } from "@lib/assets/svg/Tech";
import { Button } from "@lib/components/Button/Button";
import { AboutSection } from "@lib/views/AboutSection";
import { FaqSection } from "@lib/views/FaqSection";
import { Header } from "@lib/views/Header";
import { ServicesSection } from "@lib/views/ServicesSection";
import { Suspense } from "react";

export default async function Home() {
  const faqSection: JSX.Element = await FaqSection();
  return (
    <>
      <Suspense
        fallback={<div className="bg-main-bg text-text">Loading...</div>}
      >
        <Header />
        <section className="w-full rounded-3xl shadow-[5px_5px_9px_#131519,-5px_-5px_9px_#272d35] px-30 py-20 laptop:px-12 desktop:px-24 grid grid-cols-2 gap-y-6 laptop:grid-cols-5 gap-x-6">
          <div className="col-span-2 flex flex-col gap-y-10 justify-center">
            <h4 className="text-white text-3xl">
              W jaki sposób mogę przyczynić się do Twojego sukcesu?
            </h4>
            <Button
              text={"Zobacz więcej"}
              bg={"primary"}
              href={""}
              styles="w-36 px-4 py-2"
            />
          </div>
          <div className="shadow-[inset_5px_5px_9px_#131519,inset_-5px_-5px_9px_#272d35] rounded-lg  space-y-3 px-4 py-3">
            <Monitor />
            <h6 className="text-white">Nowoczesne Technologie:</h6>
            <p className="text-sm text-text">
              Korzystam z najnowszych technologii frontendowych, co pozwala na
              implementację interaktywnych i atrakcyjnych funkcji na stronie.
            </p>
          </div>
          <div className="shadow-[inset_5px_5px_9px_#131519,inset_-5px_-5px_9px_#272d35] rounded-lg space-y-3 px-4 py-3">
            <Tech />
            <h6 className="text-white">Dostosowane Rozwiązania:</h6>
            <p className="text-sm text-text font-normal">
              Oferuję rozwiązania dostosowane do unikalnych potrzeb Twojego
              biznesu, zapewniając elastyczność i efektywność działania.
            </p>
          </div>
          <div className="shadow-[inset_5px_5px_9px_#131519,inset_-5px_-5px_9px_#272d35] rounded-lg px-4 space-y-3 py-3">
            <Budget />
            <h6 className="text-white">Elastyczność Budżetowa:</h6>
            <p className="text-sm text-text">
              Oferuję elastyczność cenową, dostosowując się do Twojego budżetu,
              nie rezygnując z wysokiej jakości usług.
            </p>
          </div>
        </section>
        <AboutSection />
        <ServicesSection />
        {/* <NewsSection news={news} />
        <ReviewsSection homepage={homepage} />*/}
        {faqSection}
      </Suspense>
    </>
  );
}
