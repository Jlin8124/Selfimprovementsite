import { defineDocumentType, makeSource} from 'contentlayer/source-files'
import { LocalDocument } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: '**/*.mdx',
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
            required: true,
        },
        date: {
            type: 'date',
            description: 'The date of the post',
            required: true,
        },
        excerpt: {
            type: 'string',
            description: 'A short summary for the home page',
            required : true,
        },
    },
        computedFields: {
            url: {
                type: 'string',
                resolve: (post: LocalDocument) => '/blog/${post._raw.flattenedPath}',
            },
        },

}))

export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Post],
})