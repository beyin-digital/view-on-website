import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'

import { useTranslation } from 'next-i18next'

// components
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('@/components/Layout/Layout'), {
  ssr: false,
})
const VerificationDetails = dynamic(
  () => import('@/components/VerificationDetails'),
  {
    ssr: false,
  }
)

import Head from 'next/head'

const VerificationPage = () => {
  // translate hook
  const { t } = useTranslation('verification')

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
      <Layout
        nameOne=""
        linkOne=""
        nameTwo={t('nav_subscribe')}
        linkTwo="/subscribe"
        nameThree={t('nav_examples')}
        linkThree="/example"
        nameFour={t('nav_login')}
        linkFour="/login"
      >
        <VerificationDetails />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', [
        'common',
        'verification',
      ])),
    },
  }
}

export default VerificationPage
