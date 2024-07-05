import { BlogPosts } from 'app/components/posts';

export default function Page() {
  const blogPosts = getBlogPosts();

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Portfolio</h1>
      {blogPosts.map((post) => (
        <div key={post.slug} className="mb-4">
          <h2>{post.metadata.title}</h2>
          <div className="flex">
            {post.metadata.tags.map((tag, index) => (
              <span key={index} className="mr-2 text-sm bg-gray-200 px-2 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>
          <p>{post.metadata.summary}</p>
        </div>
      ))}
    </section>
  );
}

