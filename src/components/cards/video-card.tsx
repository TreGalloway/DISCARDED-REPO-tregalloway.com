import { Stack, Image, Text, Badge, Box } from '@mantine/core'

export default function VideoCard() {
    return (
        <Box>
            <Stack>
                <Image
                    width={300}
                    height={200}
                    src={null}
                    alt="With default placeholder"
                    withPlaceholder
                />
                <Text>
                    Title
                    <Badge>Badge</Badge>
                </Text>
                <Text>Short Description</Text>
            </Stack>
        </Box>
    )
}
