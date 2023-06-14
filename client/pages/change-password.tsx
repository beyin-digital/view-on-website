import { Box } from '@mui/material'

// translate
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
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
import Seo from '@/components/Seo'

const ChangePassword = () => {
  const { t } = useTranslation('changePassword')

  return (
    <>
      {/* <Head>
        <title>{t('meta_title')} </title>
        <meta name="description" content={`${t('meta_desc')}`} />
        <meta name="keyword" content={`${t('meta_keyword')}`} />
        <link
          rel="canonical"
          href="https://viewonwebsite.com/en/illustration"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head> */}
      <Seo title={t('meta_title')} descLong={`${t('meta_desc')}`}  descShort={`${t('meta_descShort')}`}  keyboard={`${t('meta_keyword')}`} canonical="https://vow-client.vercel.app/subscribe" />

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
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', [
        'common',
        'changePassword',
      ])),
    },
  }
}

export default ChangePassword
