import Link from 'next/link'
import { allPosts, type Post } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns';

export default function blog() {
    const posts = allPosts.sort((a: Post, b: Post) => compareDesc(new Date(a.date), new Date(b.date)))
    return (
    <>
    <h1 className ="text-3xl text-center mb-[20px]"> Learnings of a Self-Taught Developer </h1>
    
    <p className ="pl-80 pr-80"> My name is Jason Lin. Born and raised in Toronto, Canada. I've always had a passion for problem solving, math and logic. 
        My goal is to break into the tech industry. The endless possibilities that technology has brought has ignited a passion to learn more about programming
        and contribute to the world in a meaningful way </p>
    <div className="max-w-xl mx-auto py-12 px-6">
        <div className="space-y-10">

            {posts.map((post) => (
                <article key={post._id} className="border-b border-gray-700 pb-8"> 
                    <Link href={post.url} className=" block group">
                    {/* Title with Hover Effect */}
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                        {post.title}
                    </h2>
                    </Link>

                    <time className ="text-sm text-gray-400 block mb-3">
                        {format(parseISO(post.date), 'LLLL d, yyyy')}
                    </time>

                    <Link href={post.url} className ="text-blue-400 text-sm font-bold mt-4 inline-block hover:underline">
                    Read Post
                    </Link>
                
                </article>
               
            ))}
    </div>
    </div>
    </>        
        
    
    );
}

