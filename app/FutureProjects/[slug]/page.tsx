import { notFound } from 'next/navigation';
import { CustomMDX } from 'app/components/mdx';
import { formatDate, getFutureProjects } from 'app/FutureProjects/utils';
import { baseUrl } from 'app/sitemap';

export async function generateStaticParams() {
  let posts = getFutureProjects();

  return posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
}

export function generateMetadata({ params }) {
  let post = getFutureProjects().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: 'article',
        publishedTime,
        url: `${baseUrl}/FutureProjects/${post.slug}`,
        images: [
          {
            url: ogImage,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [ogImage],
      },
    }
  }
  export default function FutureProjects({ params }) {
    let post = getFutureProjects().find((post) => post.slug === params.slug);
  
    if (!post) {
      notFound(); 
    }
  
    return (
      <section className="text-white"> {/* Add text-white class here */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `${baseUrl}/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/FutureProjects/${post.slug}`,
              author: {
                '@type': 'Person',
                name: 'Future Projects',
              },
            }),
          }}
        />
        <div className="title-container flex items-center">
          {post.metadata.image && (
            <img
              src={post.metadata.image}
              alt="Image"
              className="title-image w-43 h-25 object-cover mr-4"
            />
          )}
          <h1 className="title font-semibold text-2xl tracking-tighter">
            {post.metadata.title}
          </h1>
        </div>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </div>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </section>
    );
  }
  