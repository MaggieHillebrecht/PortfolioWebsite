import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Projects',
  description: 'Here are some projects I have worked on that showcase my range of skills. From programming to leadership and teamwork: ',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <p>
        Here are some projects I have worked on that showcase my range of skills. From programming to leadership and teamwork:
      </p>
      <div>
        <ProjectPosts />
      </div>
    </section>
  )
}