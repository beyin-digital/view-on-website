import React from 'react'
import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'

import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { MuiOtpInput } from 'mui-one-time-password-input'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'

import { useTranslation } from 'next-i18next'
import { IconsStyle } from '@/components/Button'

import { UserContext } from '@/contexts/userContext'
import useCountdown from '@/hooks/useCountdown'

// components
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('@/components/Layout/Layout'), {
  ssr: false,
})

// icons
import { FiArrowUpLeft, FiArrowUpRight } from 'react-icons/fi'
import Head from 'next/head'
import VerificationDetails from '@/components/VerificationDetails'

const VerificationPage = () => {
  // translate hook
  const { t } = useTranslation('verification')
  const { locale } = useRouter()

  const router = useRouter()
  const [otp, setOtp] = useState('')
  const handleChange = (newValue: any) => {
    setOtp(newValue)
  }
  // animation
  const [hoveredButton, setHoveredButton] = useState(false)
  const handleHoverButton = () => {
    setHoveredButton(!hoveredButton)
  }

  const handleLeave = () => {
    setHoveredButton(false)
  }
  const { secondsLeft, start } = useCountdown()

  const { user, values, verifyOtp, resendOTP } = useContext(UserContext)

  useEffect(() => {
    start(30)
  }, [user])

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
        nameOne={t('nav_subscribe')}
        linkOne="/subscribe"
        nameTwo={t('nav_examples')}
        linkTwo="/example"
        nameThree={t('nav_login')}
        linkThree="/login"
      >
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
