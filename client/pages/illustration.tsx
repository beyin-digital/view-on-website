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
        <title>{t('meta_title')} </title>
        <meta name="description" content={`${t('meta_description')}`} />
        <meta name="keyword" content={`${t('meta_keyword')}`} />
        <link
          rel="canonical"
          href=""
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
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
