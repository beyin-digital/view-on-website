import { Box } from '@mui/material'
import { useContext } from 'react'

import Head from 'next/head'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'
import { UserContext } from '@/contexts/userContext'

// components
import dynamic from 'next/dynamic'
import { KeywordContext } from '@/contexts/keywordContext'
const RootLayout = dynamic(() => import('@/components/Dashboard/Layout'), {
  ssr: false,
})
const HomeWeb = dynamic(
  () => import('@/components/Dashboard/HomeDetails/HomeWeb'),
  {
    ssr: false,
  }
)
const HomeMobile = dynamic(
  () => import('@/components/Dashboard/HomeDetails/HomeMobile'),
  {
    ssr: false,
  }
)
const DashboardHomePage = () => {
  const { t } = useTranslation('dashboard')

  return (
    <>
      <Head>
        <title>{t('meta_title')}</title>
        <meta name="description" content={`${t('meta_description')}`} />
        <meta name="keyword" content={`${t('meta_keyword')}`} />
        <link rel="canonical" href="https://website-vow.vercel.app/en/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <RootLayout>
        <Box sx={{ display: { xs: 'none', md: 'block' }, marginX: '' }}>
          <HomeWeb />
        </Box>
        {/* Mobile boxes */}
        <HomeMobile />
      </RootLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', ['common', 'dashboard'])),
    },
  }
}

export default DashboardHomePage
