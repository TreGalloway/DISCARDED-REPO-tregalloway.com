import { Grid, Image, Text, Badge, Stack, Title } from '@mantine/core'

export default function PostCard() {
    return (
        <Grid gutter="xs">
            <Grid.Col span={3}>
                <Image
                    width={200}
                    height={120}
                    src={null}
                    alt="With default placeholder"
                    withPlaceholder
                    radius={'lg'}
                />
            </Grid.Col>
            <Grid.Col span={6}>
                <Stack>
                    <Title>{post.title}</Title>
                    <Text>Description</Text>
                </Stack>
            </Grid.Col>
        </Grid>
    )
}
