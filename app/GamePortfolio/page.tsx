import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Portfolio',
  description: 'View my Game Portfolio',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Welcome to my portfolio!</h1>
      <p>Here you will find games that I have worked on whether it is programming, UI, QA, or production:</p>
      <div style={{ marginTop: '1rem' }}>
      <BlogPosts />
      </div>
    </section>
  )
}
