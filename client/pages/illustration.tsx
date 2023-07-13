import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

// components
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/Navbar/NavbarStatic'), {
  ssr: false,
})
const FooterMobile = dynamic(() => import('@/components/Footer/FooterMobile'), {
  ssr: false,
})
const IllustrationTablet = dynamic(
  () =>
    import('@/components/illustration/IllustrationTablet/IllustrationTablet'),
  {
    ssr: false,
  }
)

const IllustrationDesktop = dynamic(
  () =>
    import('@/components/illustration/IllustrationDesktop/IllustrationDesktop'),
  {
    ssr: false,
  }
)
const IllustrationMobile = dynamic(
  () =>
    import('@/components/illustration/IllustrationMobile/IllustrationMobile'),
  {
    ssr: false,
  }
)

import Head from 'next/head'
import Seo from '@/components/Seo'

const Illustration = () => {
  const { t } = useTranslation('illustration')

  return (
    <>
      <Head>
        <title>VIEW ON WEBSITE - {t('meta_title')} </title>
        <meta name="description" content={`${t('meta_desc')}`} />
        <meta name="keyword" content={`${t('meta_keyword')}`} />
        <link rel="canonical" href="https://www.viewonwebsite.com/subscribe" />
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

      <Header
        nameOne={t('subscribe')}
        linkOne="/subscribe"
        nameTwo={t('nav_examples')}
        linkTwo="/example"
        nameThree={t('login')}
        linkThree="/login"
        nameFour={t('signup')}
        linkFour="/signup"
      />
      <IllustrationTablet />
      <IllustrationDesktop />
      <IllustrationMobile />
      <FooterMobile />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', [
        'common',
        'illustration',
      ])),
    },
  }
}
export default Illustration
