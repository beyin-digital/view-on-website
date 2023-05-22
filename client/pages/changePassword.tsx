import { Box } from '@mui/material'

// translate
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'

// components
import Layout from '@/components/Layout/Layout'
import ChangePasswordDetails from '@/components/ChangePassword/ChangePasswordDetails'
import ChangePasswordForm from '@/components/ChangePassword/ChangePasswordForm'
import Head from 'next/head'

const ChangePassword = () => {
  const { t } = useTranslation('changePassword')

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
        nameThree={t('nav_login')}
        linkThree="/login"
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
