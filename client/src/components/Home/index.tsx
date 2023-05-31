import React, { useState, Suspense, useEffect, useContext } from 'react'
// translate hook
import { useTranslation } from 'next-i18next'
import useDebounce from '@/hooks/useDebounce'

import { Drawer, Box } from '@mui/material'

// components
import dynamic from 'next/dynamic'
import { KeywordContext } from '@/contexts/keywordContext'

const Layout = dynamic(() => import('@/components/Layout/LayoutHome'), {
  ssr: false,
})
const SliderDesktop = dynamic(() => import('@/components/Slider'), {
  ssr: false,
})
const HomeDetails = dynamic(() => import('./HomeDetails'), {
  ssr: false,
})

type Anchor = 'bottom' | 'right'

interface PageHomeProps {
  anchor: Anchor
}

const PageHome: React.FC<PageHomeProps> = ({ anchor }) => {
  const { t } = useTranslation('home')

  const [hashtag, setHashtag] = useState('')
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isShadowVisible, setIsShadowVisible] = useState(true)

  const hashtagDebounce = useDebounce(hashtag, 500)

  const { keywordFound, handleCheckKeyword } = useContext(KeywordContext)

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

  useEffect(() => {
    if (hashtagDebounce || hashtagDebounce === '') {
      handleCheckKeyword(hashtagDebounce)
    }
  }, [hashtagDebounce, keywordFound])

  return (
    <Suspense>
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          width: '100%',
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Layout onClick={openModel}>
            <>
              <HomeDetails
                keywordFound={keywordFound}
                hashtag={hashtag}
                setHashtag={setHashtag}
              />
              <Drawer
                variant="temporary"
                anchor={anchor}
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                onClick={toggleDrawer('bottom', false)}
                onKeyDown={toggleDrawer('bottom', false)}
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
                <Suspense>
                  <SliderDesktop onClick={closeModel} />
                </Suspense>
              </Drawer>
            </>
          </Layout>
        </Suspense>
      </Box>
    </Suspense>
  )
}

export default PageHome
