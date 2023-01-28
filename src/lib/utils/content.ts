import { allPosts as rawPosts, allProjects as rawProjects } from ".contentlayer/generated";

const sortByDateAsc = (array: any[]) => {
  return array.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
};

const sortByDateDesc = (array: any[]) => {
  return array.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

const sortProjectFeaturedFirst = (array: any[]) => array.sort((a, b) => b.feautured - a.feautured);

const getPostBySlug = (slug: string) => rawPosts.find((post) => post.slug === slug);

const getProjectBySlug = (slug: string) => rawProjects.find((project) => project.slug === slug);

const allPosts = sortByDateDesc(rawPosts.filter((post) => post.published));

const allProjects = sortByDateDesc(rawProjects.filter((project) => project.published));

export { allPosts, allProjects };

export const utils = {
  getPostBySlug,
  getProjectBySlug,
  sortProjectFeaturedFirst,
};
