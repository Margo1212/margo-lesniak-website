import qs from "qs";
import { request } from ".";
import { stagesReducer } from "./utils/reducers";

export const getStages = async () => {
  const queryParams = qs.stringify(
    {
      populate: ["icon"],
      sort: ["id"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const { data: rawStages } = await request(`stages?${queryParams}`);

  const stage = rawStages?.map((stage: any) => stagesReducer(stage));
  return stage;
};
