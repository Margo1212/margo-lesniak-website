import { postReducer } from "@lib/utils";
import qs from "qs";
import { request } from "./index";

export const getPosts = async () => {
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
};

export const getPostBySlug = async ({ slug }: any) => {
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
  const res = await request(`posts?${query}`, { tags: [slug] });
  const rawPost = res?.data[0];
  return postReducer(rawPost);
};
