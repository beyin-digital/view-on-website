import { Box } from '@mui/material'

// translate hook
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'

// components
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/Navbar/NavbarStatic'), {
  ssr: false,
})
const PageDesktop = dynamic(() => import('@/components/Examples/PageDesktop'), {
  ssr: false,
})
const Footer = dynamic(() => import('@/components/Footer/Footer'), {
  ssr: false,
})
const PageMobile = dynamic(() => import('@/components/Examples/PageMobile'), {
  ssr: false,
})
const PageTablet = dynamic(() => import('@/components/Examples/PageTablet'), {
  ssr: false,
})
const FooterMobile = dynamic(() => import('@/components/Footer/FooterMobile'), {
  ssr: false,
})
import Head from 'next/head'
import { Background } from '@/components/Layout/Background'
import Seo from '@/components/Seo'
// import { BackgroundHome } from "@/components/Layout/Background";

const Example = () => {
  const { t } = useTranslation('example')

  return (
    <>
      <Head>
        <title>VIEW ON WEBSITE - {t('meta_title')} </title>
        <meta name="description" content={`${t('meta_desc')}`} />
        <meta name="keyword" content={`${t('meta_keyword')}`} />
        <link
          rel="canonical"
          href="https://www.viewonwebsite.com/illustration"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
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
      </Head>

      <Box
        sx={{
          height: { xs: '100%', xl: '100vh' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          maxHeight: '100%',
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <Background />
        <Header
          nameOne={t('nav_subscribe')}
          linkOne="/subscribe"
          nameTwo={t('illustration')}
          linkTwo="/illustration"
          nameThree={t('nav_login')}
          linkThree="/login"
          nameFour={t('nav_signup')}
          linkFour="/signup"
        />
        <Box
          sx={{
            position: 'relative',
            zIndex: '999',
          }}
        >
          <PageDesktop />
          <PageTablet />
          <PageMobile />
        </Box>

        <Footer />
        <FooterMobile />
      </Box>
    </>
  )
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', ['common', 'example'])),
    },
  }
}

export default Example
