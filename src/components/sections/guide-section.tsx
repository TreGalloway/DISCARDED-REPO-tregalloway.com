import {
    Container,
    Grid,
    SimpleGrid,
    Skeleton,
    useMantineTheme,
    Text,
    MantineProvider,
} from '@mantine/core'

const PRIMARY_COL_HEIGHT = 250
const PRIMARY_COL_WIDTH = 300

export function GuideSection() {
    const theme = useMantineTheme()

    return (
        <div>
            <MantineProvider theme={{ fontFamily: 'Caveat, handwriting' }}>
                <Text size={35} weight={'bold'} align={'center'}>
                    {' '}
                    My Guides (...in progess)
                </Text>
            </MantineProvider>
            <SimpleGrid
                cols={3}
                breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
                spacing={'xl'}
                ml={35}
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
        </div>
    )
}
