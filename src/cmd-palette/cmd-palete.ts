import {
    IconBrandYoutube,
    IconBrandTwitter,
    IconBrandLinkedin,
    IconBrandInstagram,
    IconBrandGithub,
    IconMoonStars,
} from '@tabler/icons'

import {
    GITHUB_PROFILE,
    LINKEDIN_PROFILE,
    POLYWORK_PROFILE,
    INSTAGRAM_PROFILE,
    TWITTER_PROFILE,
    YOUTUBE_CHANNEL,
} from '../../constants'

type BaseItem = {
    title: string
}

export type PageItem = BaseItem & {
    href: string
}

export type SocialItem = BaseItem & {
    href: string
}

export type ThemeItem = BaseItem & {
    id: 'theme'
}

export type SearchItemsType = {
    pages: PageItem[]
    social: SocialItem[]
    theme: ThemeItem[]
}

export const searchItems: SearchItemsType = {
    pages: [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'Blog',
            href: '/blog',
        },
        {
            title: 'Portfolio',
            href: '/portfolio',
        },
        {
            title: 'Tools',
            href: '/tools',
        },
        {
            title: 'Gear',
            href: '/gear',
        },
        {
            title: 'Videos',
            href: '/videos',
        },

        // {
        //     title: 'Bookmarks',
        //     href: '/bookmarks',
        // },
        {
            title: 'Books',
            href: '/books',
        },
        {
            title: 'Newsletter',
            href: '/newsletter',
        },
    ],
    social: [
        {
            title: 'YouTube',
            icon: IconBrandYoutube,
            href: YOUTUBE_CHANNEL,
        },
        {
            title: 'Twitter',
            icon: IconBrandTwitter,
            href: TWITTER_PROFILE,
        },
        {
            title: 'GitHub',
            icon: IconBrandGithub,
            href: GITHUB_PROFILE,
        },
        // {
        //     title: 'Polywork',
        //     icon: SiPolywork,
        //     href: POLYWORK_PROFILE,
        // },
        {
            title: 'LinkedIn',
            icon: IconBrandLinkedin,
            href: LINKEDIN_PROFILE,
        },

        {
            title: 'Instagram',
            icon: IconBrandInstagram,
            href: INSTAGRAM_PROFILE,
        },
    ],
    theme: [
        {
            id: 'theme',
            title: 'Change theme',
            icon: IconMoonStars,
        },
    ],
}
