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
} from '@mantine/core'
import { IconCommand } from '@tabler/icons'

const HEADER_HEIGHT = 60

const useStyles = createStyles((theme) => ({
    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}))

export default function App(props: AppProps) {
    const { classes } = useStyles()
    const { Component, pageProps } = props
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

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
                        fontFamily: 'Oswald,sans-serif',
                    }}
                >
                    <AppShell
                        header={
                            <Header
                                height={HEADER_HEIGHT}
                                sx={{ borderBottom: 0 }}
                                mb={120}
                            >
                                <Container className={classes.inner} fluid>
                                    <Group>
                                        <Text> Logo</Text>
                                    </Group>

                                    <ActionIcon
                                        color={'dark.5'}
                                        size={'lg'}
                                        style={{ alignItems: 'right' }}
                                    >
                                        <IconCommand size={26} />
                                    </ActionIcon>
                                </Container>
                            </Header>
                        }
                        footer={
                            <Footer height={60} p="md">
                                {' '}
                                Footer
                            </Footer>
                        }
                    >
                        {' '}
                        <Component {...pageProps} />
                    </AppShell>
                </MantineProvider>
            </ColorSchemeProvider>
        </>
    )
}
