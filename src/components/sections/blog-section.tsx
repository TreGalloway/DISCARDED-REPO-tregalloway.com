import { Text, Group, Box, Divider } from '@mantine/core'

export default function BlogSection() {
    return (
        <>
            <Group>
                <Divider size="md" orientation="vertical" />
                <Text size={32}> Latest Posts</Text>
            </Group>
        </>
    )
}
