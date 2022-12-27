import Link from 'next/link'
import useSWR from 'swr'
import cn from 'classnames'
import fetcher from '../../../lib/fetcher'

import { createStyles, Card, Image, Avatar, Text, Group } from '@mantine/core'

const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },

    title: {
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1.2,
    },

    body: {
        padding: theme.spacing.md,
    },
}))

interface ArticleCardVerticalProps {
    image: string
    slug: string
    category: string
    title: string
    date: string
    excerpt: string
    author: {
        name: string
        avatar: string
    }
}

export default function PostCard({
    image,
    slug,
    category,
    title,
    date,
    excerpt,
}: ArticleCardVerticalProps) {
    const { classes } = useStyles()
    return (
        <Link href={`/blog/${slug}`}>
            <Card withBorder radius="md" p={0} className={classes.card}>
                <Group noWrap spacing={0}>
                    <Image
                        src={image}
                        height={140}
                        width={140}
                        withPlaceholder
                        alt=""
                    />
                    <div className={classes.body}>
                        <Text
                            transform="uppercase"
                            color="dimmed"
                            weight={700}
                            size="xs"
                        >
                            {category}
                        </Text>
                        <Text className={classes.title} mt="xs" mb="md">
                            {title}
                        </Text>
                        <Group noWrap spacing="xs">
                            {/* <Group spacing="xs" noWrap>
                            <Avatar size={20} src={author.avatar} />
                            <Text size="xs">{author.name}</Text>
                        </Group> */}
                            <Text size="xs" color="dimmed">
                                •
                            </Text>
                            <Text size="xs" color="dimmed">
                                {date}
                            </Text>
                            <Text>{excerpt}</Text>
                        </Group>
                    </div>
                </Group>
            </Card>
        </Link>
    )
}
