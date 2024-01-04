export const postReducer = (rawPost: any) => {
  let post = { ...rawPost?.attributes };
  post.id = rawPost?.id;

  return post;
};