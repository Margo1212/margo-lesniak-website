import Image from "next/image";

export const TechnologiesSection = ({
  technologies,
}: {
  technologies: any[];
}) => {
  return (
    <section className="space-y-8">
      <h3 className="text-white text-4xl">Narzędzia i technologie</h3>
      <p className="text-text w-full laptop:w-1/2 ">
        W swojej pracy wykorzystuję najnowsze technologie i narzędzia, które
        pozwalają mi tworzyć strony internetowe i aplikacje internetowe wydajne,
        zoptymalizowane pod kątem SEO i przyjazne dla użytkownika.
      </p>
      <div className="shadow-[inset_5px_5px_9px_#131519,inset_-5px_-5px_9px_#272d35] rounded-3xl  px-8 py-8 grid tablet:grid-cols-2 laptop:grid-cols-4 desktop:grid-cols-6 gap-5 desktop:px-10 desktop:py-10">
        {technologies?.map((technology: any) => (
          <div
            className="shadow-[5px_5px_9px_#131519,-5px_-5px_9px_#272d35] px-5   py-5 rounded-3xl flex justify-center flex-col items-center gap-3"
            key={technology.id}
          >
            <Image
              src={technology.icon.data.attributes.url}
              alt={technology.name}
              width={technology.icon.data.attributes.width}
              height={technology.icon.data.attributes.height}
            />
            <p className="text-text">{technology.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
