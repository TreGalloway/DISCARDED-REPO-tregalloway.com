import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type Post = {
    _id: string
    slug: string
    content: MDXRemoteSerializeResult
    title: string
    date: string
    excerpt: string
    coverImage: string
    readingTime: string
    tweets: any[]
}

export type Snippet = {
    _id: string
    slug: string
    content: MDXRemoteSerializeResult
    title: string
    description: string
    logo: string
}

export type cmdtype = {
    id: string
    href?: string
    description: string
    icon?: any
}
