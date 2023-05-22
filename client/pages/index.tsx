import React, { useState, useCallback, Suspense } from 'react'
import { useRouter } from 'next/router'

// translate hook
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'

import { Drawer, Box } from '@mui/material'

// components
import Layout from '@/components/Layout/LayoutHome'
import SliderDesktop from '@/components/Slider'
import HomeDetails from '@/components/Home/HomeDetails'
import Head from 'next/head'

type Anchor = 'bottom' | 'right'

const HomePage = (anchor: Anchor) => {
  const { t } = useTranslation('home')

  const router = useRouter()
  const [hashtag, setHashtag] = useState('')
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isShadowVisible, setIsShadowVisible] = useState(true)

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault()
      router.push(`/subscribe/${hashtag}`)
    },
    [router, hashtag]
  )

  const [state, setState] = useState({
    top: false,
    bottom: false,
  })
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }
  function openModel() {
    setIsDrawerOpen(true)
    setIsShadowVisible(false)
  }
  function closeModel() {
    setIsDrawerOpen(false)
    setIsShadowVisible(false)
  }
  return (
    <>
      <Head>
        <title>{t('meta_title')} </title>
        <meta name="description" content="" />
        <meta name="keyword" content="" />
      </Head>{' '}
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          width: '100%',
        }}
      >
        <Layout onClick={openModel}>
          <>
            <HomeDetails />
            <Drawer
              variant="temporary"
              anchor="bottom"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
              sx={{
                background: '#FBFBFB',
                '.MuiDrawer-root': {
                  boxShadow: '0px 0px 0px 0px',
                  background: '#FBFBFB',
                },
                '.root-MuiModal-backdrop': {
                  boxShadow: '0px 0px 0px 0px',
                  background: '#FBFBFB',
                },
                boxShadow: isShadowVisible ? '0px 0px 0px #fbfbfb' : '',
                'MuiBackdrop-root': {
                  boxShadow: '0px 0px 0px 0px',
                  background: '#FBFBFB',
                },
                '.MuiBackdrop-root': {
                  boxShadow: '0px 0px 0px 0px',
                  background: '#FBFBFB',
                },
              }}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <SliderDesktop onClick={closeModel} />
              </Suspense>
            </Drawer>
          </>
        </Layout>
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', [
        'common',
        'home',
        'slider',
      ])),
    },
  }
}

export default HomePage
