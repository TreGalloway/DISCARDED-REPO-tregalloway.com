import { Text, Box, Stack, Input } from '@mantine/core'
import { IconAt, IconUser } from '@tabler/icons'

export default function NewsletterSection() {
    return (
        <>
            <Box
                sx={(theme) => ({
                    backgroundColor:
                        theme.colorScheme === 'dark'
                            ? theme.colors.dark[6]
                            : theme.colors.gray[0],
                    textAlign: 'center',
                    padding: theme.spacing.xl,
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
                <Stack>
                    <Text>Sign Up For Newsletter</Text>
                    <Text>Reasons why...</Text>
                    <Input icon={<IconUser />} placeholder="Your name" />
                    <Input icon={<IconAt />} placeholder="Your email" />
                </Stack>
            </Box>
        </>
    )
}
