import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Future Projects',
  description: 'View some of my ongoing projects',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Future Projects</h1>
      <p>I constantly are writing down ideas for fully fledged games, game mechanics, levels designs, and programs.
        However, these are a few that I am currently working on in my spare time:</p>
      <FutureProjectPosts />
    </section>
  )
}
