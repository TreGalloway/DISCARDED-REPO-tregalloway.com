import {
    Box,
    Text,
    Grid,
    SimpleGrid,
    Skeleton,
    useMantineTheme,
    Stack,
    Title,
    Badge,
    Image,
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

                    <Text size={18} weight={'bold'} color={'teal'}></Text>
                </Stack>

                <Group>
                    <Badge variant="gradient">Developer</Badge>
                    <Badge variant="gradient"> Content Creator</Badge>
                    <Badge variant="gradient"> Reader</Badge>
                </Group>
            </Box>
            <Grid gutter="md">
                {/* <Skeleton
                        height={SECONDARY_COL_HEIGHT}
                        radius="md"
                        animate={false}
                    /> */}
                <Image
                    width={400}
                    height={220}
                    src={null}
                    alt="With default placeholder"
                    withPlaceholder
                />

                {/* <Grid.Col span={6}>
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
                </Grid.Col> */}
            </Grid>
        </SimpleGrid>
    )
}
