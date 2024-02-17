export const postReducer = (rawPost: any) => {
  const post = { ...rawPost?.attributes, id: rawPost?.id };
  return post;
};

export const faqReducer = (rawFaq: any) => {
  const faq = { ...rawFaq?.attributes, id: rawFaq?.id };
  return faq;
};

export const techReducer = (rawTech: any) => {
  const tech = { ...rawTech?.attributes, id: rawTech?.id };
  return tech;
};

export const stagesReducer = (rawStages: any) => {
  const stage = { ...rawStages?.attributes, id: rawStages?.id };
  return stage;
};

export const offerReducer = (rawOffers: any) => {
  const offer = { ...rawOffers?.attributes, id: rawOffers?.id };
  return offer;
};
