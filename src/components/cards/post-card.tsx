import { Grid, Image, Text, Badge, Stack } from '@mantine/core'

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
                    <Text>Title</Text>
                    <Text>Description</Text>
                </Stack>
            </Grid.Col>
        </Grid>
    )
}
