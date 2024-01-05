import { faqReducer } from "@lib/utils";
import qs from "qs";
import { cache } from "react";
import { request } from ".";

export const getFaq = cache(async () => {
  const query = qs.stringify(
    {
      populate: ["question"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await request(`faqs?${query}`);
  const rawCategories = res?.data;
  const categories = rawCategories?.map((faq: any) => faqReducer(faq));
  return categories;
});
