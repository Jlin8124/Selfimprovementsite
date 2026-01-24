import { notFound } from 'next/navigation'

import { allPosts } from 'contentlayer/generated'
// this library does the translation of computer time to human readable time
import { compareDesc, format, parseISO} from 'date-fns' 
import { useMDXComponent } from 'next-contentlayer/hooks'

export const dynamicParams = true

export const generateStaticParams = async() => {
    const recentPosts = allPosts
        .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
        .slice(0, 10)

    
    return allPosts.map((post) => ({
        slug: post._raw.flattenedPath,
    }))
}