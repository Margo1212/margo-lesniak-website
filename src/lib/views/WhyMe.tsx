import { Budget } from "@lib/assets/svg/Budget";
import { Monitor } from "@lib/assets/svg/Monitor";
import { Tech } from "@lib/assets/svg/Tech";
import { Button } from "@lib/components/Button/Button";

export const WhyMe = () => {
  return (
    <section className="w-full rounded-3xl shadow-[5px_5px_9px_#131519,-5px_-5px_9px_#272d35] px-2 py-5 tablet:px-5 laptop:px-6 laptop:py-20 desktop:px-18 grid grid-cols-1 gap-y-6 laptop:grid-cols-5 gap-x-6">
      <div className="laptop:col-span-2 flex flex-col gap-y-10 justify-center">
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
      <div className="shadow-[inset_5px_5px_9px_#131519,inset_-5px_-5px_9px_#272d35] rounded-lg  space-y-3 px-4 py-5">
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
          Oferuję rozwiązania dostosowane do unikalnych potrzeb Twojego biznesu,
          zapewniając elastyczność i efektywność działania.
        </p>
      </div>
      <div className="shadow-[inset_5px_5px_9px_#131519,inset_-5px_-5px_9px_#272d35] rounded-lg px-4 space-y-3 py-3">
        <Budget />
        <h6 className="text-white">Elastyczność Budżetowa:</h6>
        <p className="text-sm text-text">
          Oferuję elastyczność cenową, dostosowując się do Twojego budżetu, nie
          rezygnując z wysokiej jakości usług.
        </p>
      </div>
    </section>
  );
};
