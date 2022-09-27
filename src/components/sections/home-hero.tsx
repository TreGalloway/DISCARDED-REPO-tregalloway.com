import {
    Box,
    Text,
    Grid,
    SimpleGrid,
    Skeleton,
    useMantineTheme,
    Stack,
    Title,
    Group,
} from '@mantine/core'

const PRIMARY_COL_HEIGHT = 400

export function HomeHero() {
    const theme = useMantineTheme()
    const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.lg / 2

    return (
        <SimpleGrid
            cols={2}
            spacing="md"
            breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
        >
            <Box>
                <Stack>
                    <Title>Tre&apos; Galloway</Title>
                    <Text size={18} weight={'bold'} color={'teal'}>
                        Frontend Developer / Content Creator / Reader
                    </Text>
                </Stack>
            </Box>
            <Grid gutter="md">
                <Grid.Col>
                    <Skeleton
                        height={SECONDARY_COL_HEIGHT}
                        radius="md"
                        animate={false}
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <Skeleton
                        height={SECONDARY_COL_HEIGHT}
                        radius="md"
                        animate={false}
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <Skeleton
                        height={SECONDARY_COL_HEIGHT}
                        radius="md"
                        animate={false}
                    />
                </Grid.Col>
            </Grid>
        </SimpleGrid>
    )
}
