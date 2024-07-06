import { getBlogPosts } from 'app/Portfolio/utils';
import { getProjects } from 'app/projects/utils';
import { getFutureProjects } from 'app/future_projects/utils';

export const baseUrl = 'https://portfolio-blog-starter.vercel.app';

export async function generateSitemapData() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let projects = getProjects().map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.metadata.publishedAt,
  }));

  let futureProjects = getFutureProjects().map((project) => ({
    url: `${baseUrl}/future-projects/${project.slug}`,
    lastModified: project.metadata.publishedAt,
  }));

  let routes = ['', '/blog', '/projects', '/future_projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs, ...projects, ...futureProjects];
}

