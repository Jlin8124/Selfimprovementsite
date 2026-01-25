import { notFound } from 'next/navigation'
import { posts } from '#site/content'
import { compareDesc, format, parseISO } from 'date-fns'
import { readFile } from 'fs/promises'
import { join } from 'path'
import { marked } from 'marked'

export const dynamicParams = true

export const generateStaticParams = async () => {
    
    debugger;
        // Identifying bad data 
    const invalidPosts = posts.filter(p => !p.slug);
    if (invalidPosts.length > 0) {
        console.warn(`[WARN] Skipping ${invalidPosts.length} due to missing slugs`);
    }

    return posts
        //1. THE GUARD: Remove any post that lacks a slug
        .filter((post) => post.slug)
        // 2. The TRANSFORM: Now we know 'post.slug' is guaranteed to exist
        .map((post) => ({
        slug: post.slug,
    }))
}

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const slug = (await params).slug
    const post = posts.find((p) => p.slug === slug)

    if (!post) {
        return notFound()
    }

    // Read the markdown file to get the body content
    let bodyContent = ''
    try {
        const filePath = join(process.cwd(), 'posts', `${slug}.md`)
        const fileContent = await readFile(filePath, 'utf-8')
        
        // Extract content after frontmatter (after second ---)
        const parts = fileContent.split('---')
        if (parts.length >= 3) {
            bodyContent = await marked(parts[2].trim())
        }
    } catch (error) {
        console.error('Error reading post file:', error)
    }

    return (
        <article className="max-w-2xl mx-auto py-12 px-6 text-white">
            <div className="mb-8 text-center">
                <time className="text-gray-400 text-sm mb-2 block">
                    {format(parseISO(post.date), 'LLLL d, yyyy')}
                </time>
                <h1 className="text-4xl font-bold">{post.title}</h1>
            </div>
            <div className="prose prose-invert max-w-none">
                <div 
                    dangerouslySetInnerHTML={{ __html: bodyContent }}
                    className="text-black leading-relaxed"
                />
            </div>
        </article>
    )
}




