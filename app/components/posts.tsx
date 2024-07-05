import Link from 'next/link';
import { formatDate, getBlogPosts } from 'app/blog/utils';

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => new Date(b.metadata.publishedAt) - new Date(a.metadata.publishedAt))
        .map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            passHref >
            <a className="flex flex-col space-y-1 mb-4">
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 items-center">
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </p>
                <div className="flex flex-wrap gap-1">
                  {post.metadata.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-200 text-gray-800 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </Link>
        ))}
    </div>
  );
}
