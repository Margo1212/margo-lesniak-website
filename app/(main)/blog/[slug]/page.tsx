import { request } from "@/lib";
import { postReducer } from "@/lib/utils/reducers";
import { getPostBySlug } from "@lib/posts";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import qs from "qs";

export async function generateStaticParams() {
  const query = qs.stringify(
    {
      populate: ["title", "description", "image", "author", "author.image"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`posts?${query}`);
  const rawPosts = res?.data;
  const posts = rawPosts?.map((post: any) => postReducer(post));

  return posts.map(
    (post: any) => (
      console.log(post),
      {
        slug: post.slug,
      }
    )
  );
}

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
  const post = await getPostBySlug({ slug: params.slug });
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div className="relative flex flex-col-reverse laptop:flex-row gap-4 px-5 py-4 laptop:py-16  overflow-clip">
      <div className="laptop:w-1/2 space-y-5">
        <div className="space-y-5">
          <h2 className="text-2xl text-white font-normal text-center laptop:text-4xl laptop:text-left ">
            {post.title}
          </h2>
          <p className="laptop:text-base text-sm text-text">
            {post.description}
          </p>
        </div>
        <div className="prose prose-lg prose-headings:text-xl prose-strong:text-secondary prose-headings:text-white  text-lg text-text">
          <BlocksRenderer content={post?.textblock} />
        </div>
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
