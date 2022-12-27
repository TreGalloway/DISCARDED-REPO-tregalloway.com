// import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { parseISO, format } from 'date-fns'
import { PropsWithChildren, Suspense } from 'react'
import { Post } from '../../lib/types'
import { urlForImage } from '../../lib/sanity'

import { Title, Text, Image, Group, Box } from '@mantine/core'

export default function BlogLayout({
    children,
    post,
}: PropsWithChildren<{ post: Post }>) {
    return (
        <>
            <NextSeo
                title={`${post.title} – Tre Galloway`}
                description={post.excerpt}
                twitter={{
                    handle: 'bytregalloway',
                    site: 'https://twitter.com/bytregalloway',
                    cardType: 'summary_large_image',
                }}
            />
            <article>
                <Title></Title>
                <Group>
                    <Box>{format(parseISO(post.date), 'MMMM dd, yyyy')}</Box>
                    <Box>
                        {` • `}
                        {post.readingTime}
                    </Box>
                </Group>
                <Suspense>
                    <Text> {children}</Text>
                </Suspense>
            </article>
        </>
    )
}
