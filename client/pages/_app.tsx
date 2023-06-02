import '../styles/global.css'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../src/createEmotionCache'
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { KeywordProvider } from '@/contexts/keywordContext'
import { UserProvider } from '@/contexts/userContext'

const Layout = dynamic(() => import('@/Layout'), {
  ssr: false,
})
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
        <meta charSet="utf-8" />
        {/* <meta httpEquiv="X-UA-Compatible" content="IE=edge" /> */}
        <meta
          name="viewport"
          content="width=device-width,500=device-height, initial-scale=1.0"
        />
        <title>VIEW ON WEBSITE</title>
        <meta name="description" content="" />
        <meta name="keyword" content="" />
        <meta name="application-name" content="VIEW ON WEBSITE" />
        {/* <meta name="apple-mobile-web-app-capable" content="yes" /> */}
        {/* <meta name="apple-mobile-web-app-status-bar-style" content="default" /> */}
        <meta name="apple-mobile-web-app-title" content="VIEW ON WEBSITE" />
        <meta name="description" content="" />
        <meta name="keyword" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* <meta name="mobile-web-app-capable" content="yes" /> */}
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
        <meta name="twitter:url" content="https://viewonwebsite.com" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="https://viewonwebsite.com" />
        <meta name="twitter:creator" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:site_name" content="VIEW ON WEBSITE" />
        <meta property="og:url" content="https://www.viewonwebsite.com" />
        <meta
          property="og:image"
          content="https://website-vow.vercel.app/images/logo.svg"
        />
      </Head>
      <div dir={isRTL ? 'rtl' : 'ltr'}>
        <Providers>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Providers>
      </div>
    </CacheProvider>
  )
}
export default appWithTranslation(MyApp)
