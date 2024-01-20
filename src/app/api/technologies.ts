import { techReducer } from "app/actions";
import qs from "qs";
import { request } from ".";

export const getTechnologies = async () => {
  const queryParams = qs.stringify(
    {
      populate: ["tech", "tech.icon"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const { data: rawTech } = await request(`technologies?${queryParams}`);

  const technologies = rawTech?.map((tech: any) => techReducer(tech));
  return technologies;
};
