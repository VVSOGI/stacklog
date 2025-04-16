import { BlogPosts } from '@/components/posts'

export default function Page() {
  return (
    <section>
      <div className="flex mb-8 font-semibold tracking-tighter">
        <div className="flex flex-col">
          <h2 className="text-5xl mb-4">프론트엔드 개발자</h2>
          <h1 className="text-6xl">김우석</h1>
        </div>
      </div>
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
