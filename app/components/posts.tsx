export function getSortedPosts(getPostsFunction) {
  let allPosts = getPostsFunction();
  return allPosts.sort((a, b) => new Date(b.metadata.publishedAt) - new Date(a.metadata.publishedAt));
}