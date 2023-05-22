import { Container, Grid } from '@mui/material'
import Head from 'next/head'

// layout
import Layout from '@/components/Layout/Layout'

// components
import dynamic from 'next/dynamic'

import SignupForm from '@/components/Signup/SignupForm'
import SignupDetails from '@/components/Signup/SignupDetails'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { GetServerSideProps } from 'next'

import { useTranslation } from 'next-i18next'
import { useContext, useEffect } from 'react'
import { UserContext } from '@/contexts/userContext'
import { useRouter } from 'next/router'

const SignUpPage = () => {
  const { t } = useTranslation('signup')
  const router = useRouter()

  const { token } = useContext(UserContext)
  useEffect(() => {
    if (token) {
      router.push('/dashboard')
    }
  }, [token])

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
        <Grid
          container
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            transform: 'skew(16deg, 0deg)',
          }}
        >
          <Container
            sx={{
              width: { xs: '100%', md: '70%', xl: '60%' },
              height: '100%',
              marginRight: { xs: '', md: '7rem', xl: '7rem' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              marginY: {
                xs: '0rem',
                sm: '0rem',
                md: '0rem',
                xl: '1px',
              },
              marginX: '1rem',
              paddingY: '1rem',
            }}
          >
            <SignupDetails />
            <>
              <SignupForm />
            </>
          </Container>
        </Grid>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  locale,
}: any) => {
  const token = req.cookies.token
  if (token) {
    res.setHeader('location', '/dashboard')
    res.statusCode = 302
    res.end()

    return { props: {} }
  }
  return {
    props: {
      ...(await serverSideTranslations(locale || '', ['common', 'signup'])),
    },
  }
}

export default SignUpPage
