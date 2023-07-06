import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { UserContext } from '@/contexts/userContext'
import { GetStaticProps } from 'next'
import { Box, styled, Paper } from '@mui/material'

import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// components
import dynamic from 'next/dynamic'
import withAuth from '@/hooks/withAuth'
const RootLayout = dynamic(() => import('@/components/Dashboard/Layout'), {
  ssr: false,
})
const MobileProfile = dynamic(
  () => import('@/components/Dashboard/Profile/MobileProfile'),
  {
    ssr: false,
  }
)
const WebProfile = dynamic(
  () => import('@/components/Dashboard/Profile/WebProfile'),
  {
    ssr: false,
  }
)
const Navbar = dynamic(() => import('@/components/Dashboard/Navbar'), {
  ssr: false,
})

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(251, 251, 251, 0.8)',
  border: '1px solid #E3E3E3',
  backdropFilter: 'blur(100px)',
  textAlign: 'center',
  height: '100%',
  borderRadius: '16px',
  color: theme.palette.text.secondary,
}))

const DashboardProfilePage = () => {
  const { t } = useTranslation('profile')

  const { user, token } = useContext(UserContext)

  if (!token) return <></>

  return (
    <>
      <Head>
        <title>View On Website - {t('meta_title')} </title>
        <meta name="description" content={`${t('meta_desc')}`} />
        <meta name="keyword" content={`${t('meta_keyword')}`} />
        <link rel="canonical" href="https://www.viewonwebsite.com/subscribe" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <>
        <Box
          sx={{
            width: '100%',
            display: { xs: 'block', md: 'none' },
            position: 'absolute',
            top: '0',
            zIndex: '999999',
          }}
        >
          <Navbar />
        </Box>

        <RootLayout>
          {/* Desktop Profile View */}
          <Item
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                lg: 'block',
              },
              height: '822px',
              width: '100%',
            }}
          >
            <WebProfile />
          </Item>

          {/* Mobile Profile View */}
          <MobileProfile />
          {/* <FooterMobile /> */}
        </RootLayout>
      </>
    </>
  )
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', ['common', 'profile'])),
    },
  }
}

export default withAuth(DashboardProfilePage)
