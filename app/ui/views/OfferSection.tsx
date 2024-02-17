import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export type Offer = {
  id: string;
  title: string;
  description: any;
};

export const OfferSection = ({ offers }: any) => {
  return (
    <div suppressHydrationWarning={true} className="flex flex-col gap-y-4">
      <h3 className="text-white text-4xl">Oferta</h3>
      <p className="text-text w-full laptop:w-1/2">
        Witajcie w świecie nowoczesnych technologii, gdzie tworzę strony
        internetowe, które nie tylko wyróżniają się wizualnie, ale także są
        oparte na najnowszych i najbardziej zaawansowanych narzędziach. Poniżej
        przedstawiam, jakie technologie wykorzystuję, aby Wasze projekty były
        nie tylko zgodne z najnowszymi standardami, ale także oferowały
        wyjątkowe doświadczenia użytkownika.
      </p>
      <div className="grid grid-cols-3 gap-16 py-20">
        {offers.map((offer: any) => (
          <div key={offer.id} className=" flex flex-col gap-y-3">
            <h4 className="text-white text-2xl font-bold">{offer.title}</h4>
            <div className="prose text-text">
              <BlocksRenderer content={offer.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
