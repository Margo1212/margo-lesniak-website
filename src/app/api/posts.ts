import { postReducer } from "app/actions";
import { unstable_cache } from "next/cache";
import qs from "qs";
import { request } from ".";

export const getPostBySlug = unstable_cache(
  async ({ slug }: any) => {
    const query = qs.stringify(
      {
        filters: {
          slug: {
            $eq: slug,
          },
        },
        populate: ["image", "author"],
      },
      {
        encodeValuesOnly: true,
      }
    );
    const res = await request(`posts?${query}`);
    const rawPost = res?.data[0];
    return postReducer(rawPost);
  },
  ["posts", "getPostBySlug", "blog"]
);

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
