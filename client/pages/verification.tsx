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

const VerificationPage = () => {
  // translate hook
  const { t } = useTranslation('verification')
  const { token } = useContext(UserContext)

  const router = useRouter()

  useEffect(() => {
    if (token) {
      if ((router.query.redirect as string) === 'subscribe') {
        router.push(
          `/${router.locale}/${router.query.redirect as string}?hashtag=${
            router.query.hashtag
          }&sublink=${router.query.sublink}`
        )
        return
      }
    }
  }, [token])
  return (
    <>
      <Head>
        <title>{t('meta_title')} </title>
        <meta name="description" content={`${t('meta_description')}`} />
        <meta name="keyword" content={`${t('meta_keyword')}`} />
        <link
          rel="canonical"
          href="https://wiewonwebsite.com/en/illustration"
        />{' '}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
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
