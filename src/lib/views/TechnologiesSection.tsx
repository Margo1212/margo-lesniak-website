import Image from "next/image";

export const revalidate = 10;

export const TechnologiesSection = ({
  technologies,
}: {
  technologies: any[];
}) => {
  return (
    <section className="space-y-6">
      <h4 className="text-white font-bold text-2xl">Narzędzia i technologie</h4>
      <div className="shadow-[inset_5px_5px_9px_#131519,inset_-5px_-5px_9px_#272d35] rounded-3xl  px-4 py-5 grid tablet:grid-cols-2 laptop:grid-cols-4 desktop:grid-cols-6 gap-10 desktop:px-10 desktop:py-10">
        {technologies?.map((technology: any) => (
          <div
            className="shadow-[5px_5px_9px_#131519,-5px_-5px_9px_#272d35] desktop:px-5 desktop:py-5 rounded-3xl flex justify-center flex-col items-center gap-3"
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
