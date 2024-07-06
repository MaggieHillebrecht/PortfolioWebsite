import { ProjectPost } from 'app/components/posts'

export const metadata = {
  title: 'Portfolio',
  description: 'View my Game Portfolio',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Portfolio</h1>
      <p>Here are games that I have worked on:</p>
      <BlogPosts />
    </section>
  )
}
