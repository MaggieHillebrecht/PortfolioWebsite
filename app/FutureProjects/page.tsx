import { FutureProjectPosts } from 'app/components/posts'

export const metadata = {
  title: 'Future Projects',
  description: 'View some of my ongoing projects',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Future Projects</h1>
      <p>These are some projects I am current working on in my free time or planning on 
        working on in the future!! I typically have a note pad full of game/game mechanic ideas 
        and these are just some of them that I am passionately working on. I don't have any deadline 
        and will try to update their pages whenever I have pushed a big update out: </p>
      <div style={{ marginTop: '1rem' }}>
      <FutureProjectPosts />
      </div>
    </section>
  )
}
