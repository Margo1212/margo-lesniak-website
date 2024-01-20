import { getPostBySlug } from "app/api/posts";
import Image from "next/image";

export const generateMetadata = async () => {
  return {
    title:
      "Margo Leśniak | Blog o Nowoczesnych Stronach Internetowych - Next.js, Strapi CMS, TypeScript",
    description:
      "Przeczytaj najnowsze artykuły na moim blogu dotyczące tworzenia nowoczesnych stron internetowych w oparciu o technologie takie jak Next.js, Strapi CMS i TypeScript. Dzielę się wiedzą, doświadczeniem i trendami branżowymi, aby pomóc Ci lepiej zrozumieć świat projektowania responsywnych interfejsów, programowania front-end oraz efektywnego korzystania z zaawansowanych narzędzi, takich jak Strapi. Rozwijaj się razem ze mną w świecie nowoczesnych technologii webowych.",
    keywords: [
      "Blog dla pasjonatów tworzenia stron w architekturze Jamstack",
      "Next.js",
      "Trendy w projektowaniu stron",
      "Jamstack",
      "Nowośći front-end",
      "Aktualności technologiczne",
      "Strony internetowe oparte na Jamstack z użyciem Next.js i Strapi CMS",
      "Zoptymalizowane strony dla SEO",
      "Strony internetowe dla firmy kraków",
    ],
  };
};

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug({ slug: params.slug }).catch((err) =>
    console.error(err)
  );
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div className="relative flex gap-4  px-6 py-4 laptop:py-16  overflow-clip">
      <div className="laptop:w-1/2 space-y-5">
        <div className="space-y-5">
          <h2 className="text-2xl text-white font-normal text-center laptop:text-4xl laptop:text-left ">
            {post.title}
          </h2>
          <p className="laptop:text-base text-sm text-text">
            {post.description}
          </p>
        </div>
        {post.textblock?.map((text: any) =>
          text.type === "heading" ? (
            <div key={text.id}>
              {text.children.map((p: any) => (
                <h4 key={p.id} className="font-medium text-white text-xl">
                  {p.text}
                </h4>
              ))}
            </div>
          ) : (
            <div key={text.id}>
              {text.children.map((p: any) => (
                <p className="font-normal text-text text-base" key={p.id}>
                  {p.text}
                </p>
              ))}
            </div>
          )
        )}
      </div>
      <div className="laptop:w-2/5 h-1/2 w-full px-10 py-5 flex justify-center">
        {post.image?.data !== null ? (
          <Image
            src={post?.image?.data[0]?.attributes?.url}
            alt={post?.image?.data[0]?.attributes?.alternativeText}
            width={post?.image?.data[0]?.attributes?.width}
            height={post?.image?.data[0]?.attributes?.height}
          />
        ) : null}
      </div>
    </div>
  );
}
