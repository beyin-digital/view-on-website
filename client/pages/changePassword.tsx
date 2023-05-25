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

const ChangePassword = () => {
  const { t } = useTranslation('changePassword')

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
