import {
    Container,
    Grid,
    SimpleGrid,
    Skeleton,
    useMantineTheme,
    Text,
    Divider,
} from '@mantine/core'
import GuideCard from '../cards/guide-card'

export function GuideSection() {
    const theme = useMantineTheme()

    return (
        <div>
            <Divider size="lg" orientation="vertical" />
            <h3>My Guides</h3>
        </div>
    )
}
