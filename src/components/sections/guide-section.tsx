import {
    Container,
    Grid,
    SimpleGrid,
    Skeleton,
    useMantineTheme,
    Text,
    Divider,
    Group,
} from '@mantine/core'
import GuideCard from '../cards/guide-card'

export function GuideSection() {
    const theme = useMantineTheme()

    return (
        <div>
            <Group>
                <Divider size="lg" orientation="vertical" />
                <Text size={32}>My Guides</Text>
            </Group>
        </div>
    )
}
