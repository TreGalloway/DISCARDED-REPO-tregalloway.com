import { Card, Text, ThemeIcon, Image, Group, Button } from '@mantine/core'
import { IconRocket, IconChecklist } from '@tabler/icons'

export default function GuideCard() {
    const CARD_HEIGHT = 250
    const CARD_WIDTH = 300
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section component="a" href="https://mantine.dev/">
                <Image
                    src="https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80"
                    height={160}
                    alt="Norway"
                />
            </Card.Section>

            <Group position="center" mt="md" mb="xs">
                <ThemeIcon
                    variant="gradient"
                    gradient={{ from: 'yellow', to: 'red' }}
                    size={'xl'}
                >
                    <IconChecklist size={60} />
                </ThemeIcon>
                <Text weight={500} size={25}>
                    Getting Things Done
                </Text>
            </Group>

            <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
            </Text>

            <Button
                variant="gradient"
                gradient={{ from: 'yellow', to: 'red' }}
                fullWidth
                mt="md"
                radius="md"
            >
                Checkout Guide
            </Button>
        </Card>
    )
}
