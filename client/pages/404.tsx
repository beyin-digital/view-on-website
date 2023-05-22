import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'

import Layout from '@/components/Layout/Layout'
import Head from 'next/head'

const ErrorPage = () => {
  const { t } = useTranslation('error')

  return (
    <>
      <Head>
        <title>{t('meta_title')} </title>
        <meta name="description" content="" />
        <meta name="keyword" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Layout
        nameOne={t('nav_subscribe')}
        linkOne="/subscribe"
        nameTwo={t('nav_examples')}
        linkTwo="/example"
        // nameThree={t("nav_login")}
        // linkThree="/login"
      >
        s
      </Layout>
    </>
  )
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', ['common', 'error'])),
    },
  }
}
export default ErrorPage
