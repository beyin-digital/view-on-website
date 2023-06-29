import { Box } from '@mui/material'
import { useRouter } from 'next/router'

// components
import { LinkSubscribe } from '@/components/Button'

import dynamic from 'next/dynamic'

// images Arrow
import {
  ImagesOneBoxAR,
  ImagesOneBoxEN,
  ImagesTwoBoxAR,
  ImagesTwoBoxEN,
} from './Images'

const OneBox = dynamic(() => import('./OneBox'), {
  ssr: false,
})
const TwoBox = dynamic(() => import('./TwoBox'), {
  ssr: false,
})
const ThreeBox = dynamic(() => import('./ThreeBox'), {
  ssr: false,
})

const PageDesktop = () => {
  const { locale } = useRouter()

  return (
    <>
      <Box className="PageDesktop">
        <Box
          my="auto"
          sx={{
            height: { xs: '100%', md: '100vh', lg: '88vh' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: { xs: '100%', md: '110vw', lg: '110vw' },
            position: 'relative',
            flexDirection: 'column',
            maxHeight: '88vh',
          }}
          className="PageDesktopMargin"
        >
          <Box
            sx={{
              height: { xs: '100%', md: '620px', lg: '590px' },
              width: { xs: '100%', md: '1920px', lg: '2000px' },
              borderTop: '1px solid #FBFBFB',
              borderBottom: '1px solid #FBFBFB',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row', xl: 'row' },
              overflow: 'hidden',
              background: 'rgba(251, 251, 251, 0.6)',
              marginLeft: '-6rem',
              position: 'absolute',
              left: '0',
              marginBottom: '4rem',
            }}
            className="PageDesktopLayout"
          >
            {/* Slider One */}
            <OneBox />
            {/* Arrow in page AR & EN */}
            {locale === 'ar' ? <ImagesOneBoxAR /> : <ImagesOneBoxEN />}
            {/* Slider Two */}
            <TwoBox />
            <>
              {/* Arrow in page AR & EN */}
              {locale === 'ar' ? <ImagesTwoBoxAR /> : <ImagesTwoBoxEN />}

              {/* Slider Three */}
              <ThreeBox />
            </>
          </Box>
          <Box
            sx={{
              width: '85%',
              height: '90px',
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              position: 'absolute',
              bottom: '0',
            }}
          >
            <LinkSubscribe />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default PageDesktop
