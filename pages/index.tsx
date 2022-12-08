import { Container, Group, SimpleGrid, Space } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BlogSection from '../src/components/sections/blog-section'
import { HomeHero } from '../src/components/sections/home-hero'
import NewsletterSection from '../src/components/sections/newsletter-section'
import VideoSection from '../src/components/sections/video-section'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Tre Galloway</title>
                <meta name="description" content="Tregalloway.com" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container size={'lg'}>
                <HomeHero />
                <Space h={60} />
                <VideoSection />
                <Space h={60} />
                <BlogSection />
                <Space h={60} />
                <NewsletterSection />
            </Container>
        </div>
    )
}

export default Home
