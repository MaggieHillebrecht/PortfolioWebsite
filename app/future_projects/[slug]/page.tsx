// pages/future_projects/[slug].tsx

import { notFound } from 'next/navigation';
import { CustomMDX } from 'app/components/mdx';
import { formatDate, getFutureProjects } from 'app/future_projects/utils';
import { baseUrl } from 'app/sitemap';

export async function getServerSideProps({ params }) {
  let posts = getFutureProjects();
  let post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  let { title, publishedAt, summary, image } = post.metadata;
  let ogImage = image
    ? `${baseUrl}${image}`
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    props: {
      post: {
        metadata: {
          title,
          publishedAt,
          summary,
          image,
        },
        slug: post.slug,
        content: post.content,
      },
      meta: {
        title,
        description: summary,
        openGraph: {
          title,
          description: summary,
          type: 'article',
          publishedTime: publishedAt,
          url: `${baseUrl}/future_projects/${post.slug}`,
          images: [
            {
              url: ogImage,
            },
          ],
        },
        twitter: {
          card: 'summary_large_image',
          title,
          description: summary,
          images: [ogImage],
        },
      },
    },
  };
}

export default function FutureProjectPage({ post }) {
  if (!post) {
    return <div>Loading...</div>; // Handle loading state if necessary
  }

  return (
    <section>
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
            url: `${baseUrl}/future_projects/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
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
