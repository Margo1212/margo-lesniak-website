export const postReducer = (rawPost: any) => {
  let post = { ...rawPost?.attributes };
  post.id = rawPost?.id;

  return post;
};

export const faqReducer = (rawFaq: any) => {
  let faq = { ...rawFaq?.attributes };
  faq.id = rawFaq?.id;

  return faq;
};
