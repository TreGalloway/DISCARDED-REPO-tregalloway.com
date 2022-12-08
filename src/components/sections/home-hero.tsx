import { Text, useMantineTheme, Stack, Title, Avatar } from '@mantine/core'

export function HomeHero() {
    // const theme = useMantineTheme()

    return (
        <Stack align="center" spacing="xs">
            <Avatar
                src={
                    'https://res.cloudinary.com/dq6endwuq/image/upload/v1670483997/tregalloway.com/Home/3926DF2B-ED0B-43E7-B20F-4CA2BBA68084_q8mjg6.jpg'
                }
                alt="it's me"
                size={120}
                radius={120}
            ></Avatar>
            <Title>Tre&apos; Galloway</Title>
            <Text>
                {' '}
                I&apos;m a Developer, Reader, and overly curious person.
            </Text>
        </Stack>
    )
}
