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
