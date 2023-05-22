import Head from 'next/head'
import { Box, Grid } from '@mui/material'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'

// components
import dynamic from 'next/dynamic'

import Layout from '@/components/Layout/Layout'
import DetailsHeader from '@/components/Request/DetailsHeader'
import FormRequest from '@/components/Request/FormRequest'

const Request = () => {
  const { t } = useTranslation('request')

  return (
    <>
      <Head>
        <title>{t('meta_title')} </title>
        <meta name="description" content="" />
        <meta name="keyword" content="" />
      </Head>{' '}
      <Layout
        nameOne={t('nav_subscribe')}
        linkOne="/subscribe"
        nameTwo={t('nav_examples')}
        linkTwo="/example"
        nameThree={t('nav_login')}
        linkThree="/login"
      >
        <Grid
          container
          sx={{
            width: { xs: '100%', md: '90%', xl: '90%' },
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            transform: 'skew(16deg, 0deg)',
            paddingX: '1rem',
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', md: '70%', xl: '865px' },
              height: { xs: '100%', md: '90%', xl: '90%' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
              position: 'relative',
              paddingX: '1rem',
            }}
          >
            <DetailsHeader />
            <FormRequest />
          </Box>
        </Grid>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', ['common', 'request'])),
    },
  }
}

export default Request
