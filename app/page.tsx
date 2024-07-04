import { BlogPosts } from 'app/components/posts'
import Image from 'next/image';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Maggie Hillebrecht
        <Image
          src="https://static.wixstatic.com/media/fde1e5_cb2f6d885ffc49cea9d42b0d4636494e~mv2.png/v1/crop/x_213,y_0,w_2250,h_2250/fill/w_960,h_960,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/IMG_3621_edited.png"
          alt="Picture of me :D"
          width={500}
          height={500}
        />
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
