import { Box } from '@mui/material'

// translate hook
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'

// components
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Navbar/Navbar'
import PageDesktop from '@/components/Examples/PageDesktop'
import PageMobile from '@/components/Examples/PageMobile'
import PageTablet from '@/components/Examples/PageTablet'
import FooterMobile from '@/components/Footer/FooterMobile'
import Head from 'next/head'

const Example = () => {
  const { t } = useTranslation('example')

  return (
    <>
      <Head>
        <title>{t('meta_title')} </title>
        <meta name="description" content="" />
        <meta name="keyword" content="" />
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
