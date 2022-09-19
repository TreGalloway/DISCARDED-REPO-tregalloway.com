import {
    Container,
    Grid,
    SimpleGrid,
    Skeleton,
    useMantineTheme,
} from '@mantine/core'

const PRIMARY_COL_HEIGHT = 200
const PRIMARY_COL_WIDTH = 300

export function GuideSection() {
    const theme = useMantineTheme()

    return (
        <Container size="lg">
            <SimpleGrid
                cols={3}
                spacing="md"
                breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
            >
                <Skeleton
                    height={PRIMARY_COL_HEIGHT}
                    width={PRIMARY_COL_WIDTH}
                    radius="md"
                    animate={false}
                />
                <Skeleton
                    height={PRIMARY_COL_HEIGHT}
                    width={PRIMARY_COL_WIDTH}
                    radius="md"
                    animate={false}
                />
                <Skeleton
                    height={PRIMARY_COL_HEIGHT}
                    width={PRIMARY_COL_WIDTH}
                    radius="md"
                    animate={false}
                />
            </SimpleGrid>
        </Container>
    )
}
