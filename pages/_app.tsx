import { AppProps } from 'next/app'
import { useState } from 'react'
import Head from 'next/head'
import {
    MantineProvider,
    ColorScheme,
    ColorSchemeProvider,
    AppShell,
    Footer,
    Text,
    Header,
    Group,
    Container,
    ActionIcon,
    createStyles,
    Tooltip,
} from '@mantine/core'
import { SpotlightProvider, openSpotlight } from '@mantine/spotlight'
import actions from '../src/cmd/cmd'
import { IconCommand, IconSearch } from '@tabler/icons'

const HEADER_HEIGHT = 60

const useStyles = createStyles((theme) => ({
    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
    },
}))

export default function App(props: AppProps) {
    const { classes } = useStyles()
    const { Component, pageProps } = props
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
    const light = colorScheme === 'light'

    return (
        <>
            <Head>
                <title>Tre Galloway</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
            >
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        colorScheme,
                        fontFamily: 'Poppins,sans-serif',
                        headings: {
                            fontFamily: 'Poppins,sans-serif',
                            fontWeight: 'bold',
                            sizes: {
                                h1: { fontSize: 32 },
                                h2: { fontSize: 26 },
                                h3: { fontSize: 20 },
                            },
                        },
                        defaultGradient: {
                            from: '#06d6a0',
                            to: 'blue',
                            deg: 45,
                        },
                        loader: 'oval',
                    }}
                >
                    <SpotlightProvider
                        actions={actions}
                        searchIcon={<IconSearch size={18} />}
                        searchPlaceholder="Search..."
                        shortcut="mod + k"
                        limit={6}
                        highlightQuery
                        highlightColor={'teal'}
                        nothingFoundMessage="Nothing found..."
                        transitionDuration={300}
                        transition="slide-down"
                    >
                        <AppShell
                            header={
                                <Header
                                    height={HEADER_HEIGHT}
                                    sx={{
                                        borderBottom: 0,
                                    }}
                                >
                                    <Container
                                        className={classes.inner}
                                        size={'lg'}
                                    >
                                        <Tooltip
                                            label="CMD + K"
                                            withArrow
                                            color={light ? 'dark.3' : 'gray.4'}
                                        >
                                            <ActionIcon
                                                color={
                                                    light ? 'dark.5' : 'gray.2'
                                                }
                                                size={'lg'}
                                                style={{ alignItems: 'right' }}
                                                onClick={() => openSpotlight()}
                                            >
                                                <IconCommand size={24} />
                                            </ActionIcon>
                                        </Tooltip>
                                    </Container>
                                </Header>
                            }
                            // footer={
                            //     <Footer height={60} p="md">
                            //         <Container size={'lg'}>
                            //             <Text>Footer</Text>
                            //         </Container>
                            //     </Footer>
                            // }
                        >
                            <Container size={'lg'}>
                                <Component {...pageProps} />
                            </Container>
                        </AppShell>
                    </SpotlightProvider>
                </MantineProvider>
            </ColorSchemeProvider>
        </>
    )
}
