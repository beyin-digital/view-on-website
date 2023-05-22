import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

// components
import Header from '@/components/Navbar/Navbar'
import FooterMobile from '@/components/Footer/FooterMobile'
import IllustrationTablet from '@/components/illustration/IllustrationTablet/IllustrationTablet'
import IllustrationDesktop from '@/components/illustration/IllustrationDesktop/IllustrationDesktop'
import IllustrationMobile from '@/components/illustration/IllustrationMobile/IllustrationMobile'
import Head from 'next/head'

const Illustration = () => {
  const { t } = useTranslation('illustration')

  return (
    <>
      <Head>
        <title>{t('meta_title')} </title>
        <meta name="description" content="" />
        <meta name="keyword" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>{' '}
      <Header
        nameOne={t('subscribe')}
        linkOne="/subscribe"
        nameTwo={t('nav_examples')}
        linkTwo="/example"
        nameThree={t('login')}
        linkThree="/login"
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
