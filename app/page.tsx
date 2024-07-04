import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Maggie Hillebrecht
      </h1>
      <p className="mb-4">
        {`I am a student at Chapman University and currently majoring in Computer Science with a minor in Game Development Programming.
          I found my passion for game development and programming through making Cosmic Breakfast Adventures when I was in 8th grade using scratch programming.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
