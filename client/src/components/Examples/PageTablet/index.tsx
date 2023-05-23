import { Box } from '@mui/material'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { LinkSubscribe } from '@/components/Button'

import dynamic from 'next/dynamic'

const OneBox = dynamic(() => import('./OneBox'), {
  ssr: false,
})
const TwoBox = dynamic(() => import('./TwoBox'), {
  ssr: false,
})
const ThreeBox = dynamic(() => import('./ThreeBox'), {
  ssr: false,
})

const PageTablet = () => {
  const { t } = useTranslation('example')

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          zIndex: '9999',
        }}
        className="PageTablet"
      >
        <Box
          sx={{
            width: '100%',
            display: { xs: 'block', sm: 'block', md: 'none', xl: 'none' },
          }}
        >
          <Image
            fill
            src="/images/swirl.webp"
            alt=""
            className="ImageMobil"
            style={{
              top: '-35rem',
            }}
          />
        </Box>

        <Box
          sx={{
            width: '100%',
            display: { xs: 'none', sm: 'none', md: 'block', xl: 'block' },
          }}
        >
          <Image
            fill
            src="/images/swirl.webp"
            alt="Background Example Page"
            title="Background Example Page"
            style={{
              top: '-36rem',
              position: 'absolute',
            }}
          />
        </Box>
        <Box
          sx={{
            width: '100%',
            marginY: '4rem',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <OneBox />
            <TwoBox />
            <ThreeBox />
          </Box>
          <Box
            sx={{
              width: '85%',
              height: '90px',
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
            }}
          >
            <LinkSubscribe />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default PageTablet
