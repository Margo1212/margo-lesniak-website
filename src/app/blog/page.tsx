import { NextBreadcrumb } from "@lib/components/Breadcrumbs/Breadcrumbs";
import { Title } from "@lib/components/Title/Title";
import { getPosts } from "@lib/data/posts";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default async function Page() {
  const postData = getPosts();
  const posts = await Promise.resolve(postData).catch((err) =>
    console.error(err)
  );
  console.log(posts);

  return (
    <section className="bg-main-bg px-5 laptop:px-24 gap-3 pt-10 pb-32 desktop:px-44 space-y-10">
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
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
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
