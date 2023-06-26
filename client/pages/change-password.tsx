import { Box } from '@mui/material'

// translate
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'

// components
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('@/components/Layout/Layout'), {
  ssr: false,
})
const ChangePasswordDetails = dynamic(
  () => import('@/components/ChangePassword/ChangePasswordDetails'),
  {
    ssr: false,
  }
)
const ChangePasswordForm = dynamic(
  () => import('@/components/ChangePassword/ChangePasswordForm'),
  {
    ssr: false,
  }
)

import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const ChangePassword = ({ data }: any) => {
  const { t } = useTranslation('changePassword')
  const router = useRouter()

  useEffect(() => {
    window.location.href = `/${data?.locale as string}/change-password?token=${
      data?.token as string
    }`
  }, [])
  return (
    <>
      <Head>
        <title>VIEW ON WEBSITE - {t('meta_title')} </title>
        <meta name="description" content={`${t('meta_desc')}`} />
        <meta name="keyword" content={`${t('meta_keyword')}`} />
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
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            paddingX: '1rem',
            transform: 'skew(16deg, 0deg)',
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', md: '80%', xl: '75%' },
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'end',
            }}
          >
            <Box
              sx={{
                width: '728px',
                height: { xs: '100%', sm: '600px', md: '600px', xl: '600px' },
                padding: '1rem',
              }}
            >
              <ChangePasswordDetails />
              <ChangePasswordForm />
            </Box>
          </Box>
        </Box>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  locale,
}) => {
  return {
    props: {
      data: { token: query.token, locale: locale || '' },
      ...(await serverSideTranslations(locale || '', [
        'common',
        'changePassword',
      ])),
    },
  }
}

export default ChangePassword
