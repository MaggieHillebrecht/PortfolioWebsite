import Link from 'next/link';
import { getBlogPosts, formatDate as formatDateBlog } from 'app/GamePortfolio/utils';
import { getProjects, formatDate as formatDateProjects } from 'app/CodingPortfolio/utils';
import { getFutureProjects, formatDate as formatDateFutureProjects } from 'app/FutureProjects/utils';

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  // Sort posts by date in descending order
  allBlogs.sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime());

  return (
    <div>
      {allBlogs.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4 hover-highlight"
          href={`/GamePortfolio/${post.slug}`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-white dark:text-white w-[100px] tabular-nums">
              {formatDateBlog(post.metadata.publishedAt, false)}
            </p>
            <div className="flex items-center space-x-2">
              {post.metadata.image && (
                <img
                  src={post.metadata.image}
                  alt={post.metadata.title}
                  className="w-[200px] h-auto"
                />
              )}
              <p className="text-white dark:text-white tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function ProjectPosts() {
  let allProjects = getProjects();

  allProjects.sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime());

  return (
    <div>
      {allProjects.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4 hover-highlight"
          href={`/CodingPortfolio/${post.slug}`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-white dark:text-white w-[100px] tabular-nums">
              {formatDateProjects(post.metadata.publishedAt, false)}
            </p>
            <div className="flex items-center space-x-2">
              {post.metadata.image && (
                <img
                  src={post.metadata.image}
                  alt={post.metadata.title}
                  className="w-[200px] h-auto"
                />
              )}
              <p className="text-white dark:text-white tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function FutureProjectPosts() {
  let allFutureProjects = getFutureProjects();

  allFutureProjects.sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime());

  return (
    <div>
      {allFutureProjects.map((post) => (
        <Link
          key={post.slug}
          className="flex flex-col space-y-1 mb-4 hover-highlight"
          href={`/FutureProjects/${post.slug}`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-white dark:text-white w-[100px] tabular-nums">
              {formatDateFutureProjects(post.metadata.publishedAt, false)}
            </p>
            <div className="flex items-center space-x-2">
              {post.metadata.image && (
                <img
                  src={post.metadata.image}
                  alt={post.metadata.title}
                  className="w-[200px] h-auto"
                />
              )}
              <p className="text-white dark:text-white tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
