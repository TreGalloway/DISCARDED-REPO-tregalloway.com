import { Title, Text, Stack, Group, Autocomplete } from '@mantine/core'
import { IconSearch } from '@tabler/icons'

export default function Blog() {
    return (
        <Stack>
            <Title align="center">Blog</Title>
            <Text>Info on the blog</Text>
            <Autocomplete
                placeholder="Search"
                icon={<IconSearch size={16} stroke={1.5} />}
                data={[
                    'React',
                    'Angular',
                    'Vue',
                    'Next.js',
                    'Riot.js',
                    'Svelte',
                    'Blitz.js',
                ]}
            />
        </Stack>
    )
}
