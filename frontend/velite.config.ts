import { defineConfig, defineCollection, s } from 'velite'

const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.md',
  schema: s.object({
    title: s.string(),
    date: s.string(),
    excerpt: s.string(),
    slug: s.string().optional(),
    content: s.string().optional(),
  }),
})

export default defineConfig({
  collections: { posts },
  root: '',
})
