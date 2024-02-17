import qs from "qs";
import { request } from ".";
import { offerReducer } from "./utils/reducers";

export const getOffers = async () => {
  const queryParams = qs.stringify(
    {
      populate: ["description"],
      sort: ["id:asc"],
    },

    {
      encodeValuesOnly: true,
    }
  );
  const { data: rawOffers } = await request(`offers?${queryParams}`);

  const offers = rawOffers?.map((offer: any) => offerReducer(offer));
  return offers;
};
