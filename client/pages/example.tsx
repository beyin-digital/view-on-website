import { Box } from '@mui/material'

// translate hook
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'

// components
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/Navbar/Navbar'), {
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

const Example = () => {
  const { t } = useTranslation('example')

  return (
    <>
      <Head>
        <title>{t('meta_title')} </title>
        <meta name="description" content={`${t('meta_description')}`} />
        <meta name="keyword" content={`${t('meta_keyword')}`} />
        <link rel="canonical" href="https://website-vow.vercel.app/en/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
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
          height: { xs: '100%', xl: '89vh' },
        }}
      >
        <PageDesktop />
        <PageTablet />
        <PageMobile />
      </Box>
      <Footer />
      <FooterMobile />
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
