import { unstable_cache } from "next/cache";
import qs from "qs";
import { request } from ".";
import { postReducer } from "../actions";

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
