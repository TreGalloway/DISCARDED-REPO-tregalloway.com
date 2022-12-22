import {
    Text,
    useMantineTheme,
    Box,
    Group,
    Title,
    Image,
    Stack,
} from '@mantine/core'

export function HomeHero() {
    // const theme = useMantineTheme()

    return (
        <Group spacing={'xl'}>
            <Stack>
                <Title>Tre&apos; Galloway</Title>
                <Box
                    sx={(theme) => ({
                        backgroundColor:
                            theme.colorScheme === 'dark'
                                ? theme.colors.dark[6]
                                : theme.colors.gray[1],
                        textAlign: 'left',
                        padding: theme.spacing.sm,
                        borderRadius: theme.radius.md,
                        cursor: 'pointer',

                        '&:hover': {
                            backgroundColor:
                                theme.colorScheme === 'dark'
                                    ? theme.colors.dark[5]
                                    : theme.colors.gray[1],
                        },
                    })}
                >
                    <Text weight={'bold'} color="cyan.7">
                        I&apos;m a Developer, Reader, and overly curious person.
                    </Text>
                </Box>

                <Text>
                    I learn things the interst me and share them with others.
                </Text>
            </Stack>

            <Image
                src={
                    'https://res.cloudinary.com/dq6endwuq/image/upload/v1670483997/tregalloway.com/Home/3926DF2B-ED0B-43E7-B20F-4CA2BBA68084_q8mjg6.jpg'
                }
                alt="it's me"
                width={360}
                height={220}
                radius={'md'}
            />
        </Group>
    )
}
