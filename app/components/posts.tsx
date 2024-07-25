import Link from 'next/link';
import { getBlogPosts, formatDate as formatDateBlog } from 'app/GamePortfolio/utils';
import { getProjects, formatDate as formatDateProjects } from 'app/CodingPortfolio/utils';
import { getFutureProjects, formatDate as formatDateFutureProjects } from 'app/FutureProjects/utils';

export function BlogPosts() {
  let allBlogs = getBlogPosts(); 

  return (
    <div>
      {allBlogs.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/GamePortfolio/${post.slug}`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              {formatDateBlog(post.metadata.publishedAt, false)}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.metadata.title}
            </p>
          </div>
          {post.metadata.image && (
            <img
              src={post.metadata.image}
              alt={post.metadata.title}
              className="w-full h-auto mt-2"
            />
          )}
        </Link>
      ))}
    </div>
  );
}

export function ProjectPosts() {
  let allProjects = getProjects(); 

  return (
    <div>
      {allProjects.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/CodingPortfolio/${post.slug}`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              {formatDateProjects(post.metadata.publishedAt, false)}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.metadata.title}
            </p>
          </div>
          {post.metadata.image && (
            <img
              src={post.metadata.image}
              alt={post.metadata.title}
              className="w-full h-auto mt-2"
            />
          )}
        </Link>
      ))}
    </div>
  );
}

export function FutureProjectPosts() {
  let allFutureProjects = getFutureProjects(); 

  return (
    <div>
      {allFutureProjects.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/FutureProjects/${post.slug}`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              {formatDateFutureProjects(post.metadata.publishedAt, false)}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.metadata.title}
            </p>
          </div>
          {post.metadata.image && (
            <img
              src={post.metadata.image}
              alt={post.metadata.title}
              className="w-50 h-auto mt-2"
            />
          )}
        </Link>
      ))}
    </div>
  );
}