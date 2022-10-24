import { Button, Group, Text } from '@mantine/core'
import {
    SpotlightProvider,
    openSpotlight,
    useSpotlight,
} from '@mantine/spotlight'
import Link from 'next/link'
import type { SpotlightAction } from '@mantine/spotlight'
import {
    IconHome,
    IconArticle,
    IconTimeline,
    IconBrandYoutube,
    IconBrandTwitter,
} from '@tabler/icons'

const actions: SpotlightAction[] = [
    {
        title: 'Home',
        group: 'Pages',
        description: 'Get to home page',
        onTrigger: () => <Link href={'/'}>Home</Link>,
        icon: <IconHome size={18} />,
    },

    {
        title: 'Blog',
        group: 'Pages',
        description: 'My blog posts',
        onTrigger: () => <Link href={'/blog'}>Blog</Link>,
        icon: <IconArticle size={18} />,
    },
    {
        title: 'Timeline',
        group: 'Pages',
        description: 'Timelines for my life ',
        onTrigger: () => {},
        icon: <IconTimeline size={18} />,
    },
    {
        title: 'YouTube',
        group: 'Social',
        description: 'Visit documentation to lean more about all features',
        onTrigger: () => '/blog',
        icon: <IconBrandYoutube size={18} color={'red'} />,
    },
    {
        title: 'Twitter',
        group: 'Social',
        description: 'Visit documentation to lean more about all features',
        onTrigger: () => '/blog',
        icon: (
            <Text color={'blue.5'}>
                <IconBrandTwitter size={18} />
            </Text>
        ),
    },
]

export default actions
