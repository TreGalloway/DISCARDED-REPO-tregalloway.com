import { Text, Box, Divider, Stack, Title } from '@mantine/core'
import PostCard from '../cards/post-card'

export default function BlogSection() {
    return (
        <>
            <Stack>
                <Title align="left"> Latest Posts</Title>
                <PostCard />
            </Stack>
        </>
    )
}
