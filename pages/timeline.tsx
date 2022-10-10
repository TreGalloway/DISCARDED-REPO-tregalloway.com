import { Tabs, Box } from '@mantine/core'
import { IconCode, IconOld, IconVideoPlus } from '@tabler/icons'
import CreatorTimeline from '../src/components/timlines/creator-timeline'
import DeveloperTimeline from '../src/components/timlines/developer-timeline'
import LifeTimeline from '../src/components/timlines/life-timeline'

export default function Timeline() {
    return (
        <Tabs defaultValue="life" orientation="vertical">
            <Tabs.List>
                <Tabs.Tab
                    value="life"
                    icon={<IconOld size={14} />}
                    color="teal"
                >
                    Life
                </Tabs.Tab>
                <Tabs.Tab
                    value="developer"
                    icon={<IconCode size={14} />}
                    color="violet"
                >
                    Developer
                </Tabs.Tab>
                <Tabs.Tab
                    value="creator"
                    icon={<IconVideoPlus size={14} />}
                    color="red"
                >
                    Creator
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="life" pt="xs">
                <LifeTimeline />
            </Tabs.Panel>

            <Tabs.Panel value="developer" pt="xs">
                <DeveloperTimeline />
            </Tabs.Panel>

            <Tabs.Panel value="creator" pt="xs">
                <CreatorTimeline />
            </Tabs.Panel>
        </Tabs>
    )
}
