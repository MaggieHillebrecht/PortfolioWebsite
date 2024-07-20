import { BlogPosts } from 'app/components/posts'
import Image from 'next/image';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        <div className="flex items-center">
          <span className="mr-4">Maggie Hillebrecht</span>
          <Image
            src="https://i.postimg.cc/W4sPyh9m/IMG-3621.jpg"
            alt="Picture of me :D"
            width={250}
            height={250}
          />
        </div>
      </h1>
      <p className="mb-4">
        Hi! My name is Margaret but you can call me Maggie. 
        I am currently a senior at Chapman University, majoring in Computer Science and minoring 
        in Game Development Programming. I am a first generation University student and transferred 
        from Santiago Canyon College. I am constantly working on projects so feel free to contact me and ask what I might be working on!
        <br /> <br />
        I grew up playing video games with my cousins when I was 6 
        and have been passionate about the gaming world ever since. Some of my other 
        hobbies are cooking/baking for my friends and family, and gardening.
      </p>
    </section>
  )
}
