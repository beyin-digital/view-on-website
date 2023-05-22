import '../styles/global.css'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { GoogleOAuthProvider } from '@react-oauth/google'

import theme from '../src/theme'
import createEmotionCache from '../src/createEmotionCache'

import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import { KeywordProvider } from '@/contexts/keywordContext'
import { UserProvider } from '@/contexts/userContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const combineProviders = (providers: any[]) =>
  providers.reduce((Combined: any, Provider: any) => ({ children }: any) => (
    <Combined>
      <Provider>{children}</Provider>
    </Combined>
  ))

const Providers = combineProviders([UserProvider, KeywordProvider])

function MyApp(props: MyAppProps) {
  const { locale } = useRouter()
  const isRTL = locale === 'ar'

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comforter&family=Finlandica:ital,wght@1,400;1,500;1,700&family=Gentium+Book+Plus:ital,wght@0,400;0,700;1,400;1,700&family=IBM+Plex+Sans+Arabic:wght@200;300;400;500;600;700&family=Inter:wght@200;400;500;600;700;800;900&family=League+Spartan:wght@300;400;500;600&family=Neonderthaw&family=Poppins:wght@100;300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <title>VIEW ON WEBSITE</title>
        <meta name="description" content="" />
        <meta name="keyword" content="" />
        <meta name="application-name" content="VIEW ON WEBSITE" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="VIEW ON WEBSITE" />
        <meta name="description" content="" />
        <meta name="keyword" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/pwa/browserconfig.xml" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/pwa/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/pwa/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/pwa/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/pwa/safari-pinned-tab.svg"
          color="#171b1c"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-TileImage"
          content="/pwa/mstile-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/pwa/manifest.json" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://website-vow.vercel.app" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="https://website-vow.vercel.app" />
        <meta name="twitter:creator" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="VIEW ON WEBSITE" />
        <meta property="og:url" content="https://website-vow.vercel.app" />
        <meta
          property="og:image"
          content="https://website-vow.vercel.app/images/logo.svg"
        />
      </Head>
      <div dir={isRTL ? 'rtl' : 'ltr'}>
        <Providers>
          <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
          >
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <>
                <Component {...pageProps} />
                <ToastContainer />
              </>
            </ThemeProvider>
          </GoogleOAuthProvider>
        </Providers>
      </div>
    </CacheProvider>
  )
}
export default appWithTranslation(MyApp)
