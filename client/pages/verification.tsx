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
import { useContext, useEffect } from 'react'
import { UserContext } from '@/contexts/userContext'
import { useRouter } from 'next/router'
import Seo from '@/components/Seo'

const VerificationPage = () => {
  // translate hook
  const { t } = useTranslation('verification')
  const { token } = useContext(UserContext)

  const router = useRouter()

  useEffect(() => {
    if (token) {
      if (router.query.redirect === 'subscribe') {
        router.push(
          `/${router.locale}/subscribe?hashtag=${router.query.hashtag}&sublink=${router.query.sublink}`
        )
        return
      }
    }
  }, [token])

  return (
    <>
      <Head>
        <title>VIEW ON WEBSITE - {t('meta_title')} </title>
        <meta name="description" content={`${t('meta_desc')}`} />
        <meta name="keyword" content={`${t('meta_keyword')}`} />
        <link rel="canonical" href="https://www.viewonwebsite.com" />
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

      <Layout>
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
