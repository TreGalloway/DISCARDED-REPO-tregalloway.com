import { Grid, Stack, Title } from '@mantine/core'
import VideoCard from '../cards/video-card'

export default function VideoSection() {
    return (
        <Stack>
            <Title align="center">Featured Videos</Title>
            <Grid>
                <VideoCard />
            </Grid>
        </Stack>
    )
}
