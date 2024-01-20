import { NextBreadcrumb } from "@lib/components/Breadcrumbs/Breadcrumbs";
import { Title } from "@lib/components/Title/Title";
import { postReducer } from "app/actions";
import { request } from "app/api";
import { unstable_cache } from "next/cache";
// import { getPosts } from "app/api/posts";
import Image from "next/image";
import Link from "next/link";
import qs from "qs";

export const getPosts = unstable_cache(async () => {
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

  return posts;
}, ["posts", "getPosts", "blog"]);

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

export default async function Page() {
  const posts = await getPosts();

  return (
    <section className=" px-5 laptop:px-24 gap-3 pt-10 pb-32 space-y-10">
      <Title>Blog</Title>
      <NextBreadcrumb
        homeElement={"Strona Główna"}
        separator={
          <svg
            className="w-6 h-6 text-text"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        }
        activeClasses="text-amber-500"
        containerClasses="flex py-5 bg-gradient-to-r from-purple-600 to-blue-600"
        listClasses="hover:underline mx-2 font-bold text-text"
        capitalizeLinks
      />
      <div className="grid laptop:grid-cols-3 laptop:gap-x-14 content-center tablet:grid-cols-2 tablet:gap-x-12 grid-cols-1 desktop:gap-x-32 gap-y-14">
        {posts?.map((post: any) => (
          <div key={post.id} className="flex flex-col gap-y-5">
            <div className="w-full h-[250px]">
              <Image
                className="rounded-lg h-full"
                src={post?.image.data[0]?.attributes?.url}
                alt={post?.image.data[0]?.attributes?.alternativeText}
                width={post?.image.data[0]?.attributes?.width}
                height={post?.image.data[0]?.attributes?.height}
              />
            </div>
            <div className="w-full flex flex-col gap-y-5">
              <p className="font-medium text-text text-sm">
                {post.createdat} - {post.author.data.attributes.name}
              </p>
              <h4 className="font-medium text-white text-3xl">{post.title}</h4>
              <p className="font-normal text-text text-base">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-secondary uppercase"
              >
                Czytaj Więcej
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
