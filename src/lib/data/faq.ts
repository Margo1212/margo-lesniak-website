import { faqReducer } from "@lib/utils";
import qs from "qs";
import { request } from ".";

export const getFaq = async () => {
  const queryParams = qs.stringify(
    {
      populate: ["question"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const { data: rawFaq } = await request(`faqs?${queryParams}`);

  const faq = rawFaq?.map((faq: any) => faqReducer(faq));
  return faq;
};
