import React from 'react'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { ButtonStyleDesktop } from '.'
import Image from 'next/image'

// components
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('@/components/Footer/Footer'), {
  ssr: false,
})
interface Props {
  children: React.ReactNode
}
const LayoutDesktop: React.FC<Props> = ({ children }) => {
  const { locale } = useRouter()

  return (
    <div className="IllustrationDesktop">
      <Box
        sx={{
          width: '2192px',
          maxWidth: '100%',
          height: { xs: '100%', md: '100vh', xl: '88vh' },
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className="IllustrationDesktop"
      >
        <Box
          sx={{
            maxWidth: '100%',
            margin: 'auto',
            height: { xs: '100%', md: '100vh', xl: '100vh' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'fixed',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'fixed',
              height: '100vh',
              width: '100%',
              maxWidth: '100%',
              minHeight: '100%',
              background: "url('/images/swirl.webp')",
              backgroundPositionY: {
                xs: '-1250px',
                sm: '-1100px',
                md: '-1100px',
                xl: '-1000px',
              },
              backgroundPositionX: { xs: '-800px', md: '-600px', xl: '-300px' },
              backgroundRepeat: 'no-repeat',
            }}
            className="ImageBgHome"
          />
          <Image
            alt=""
            style={{
              top: '-1rem',
              left: '-11rem',
              position: 'absolute',
            }}
            src="/images/swirl.webp"
            width={600}
            height={500}
            className="ImageHome"
          />
          {/* <BackgroundImage /> */}
          <Box
            sx={{
              position: 'relative',
              maxWidth: '100%',
              width: '2192px',
              height: { xs: '100%', sm: '540px', md: '650px', xl: '590px' },
              background: {
                xs: 'transparent',
                md: 'rgba(251, 251, 251, 0.6)',
                xl: 'rgba(251, 251, 251, 0.6)',
              },
              border: {
                xs: '0',
                md: '1px solid #FBFBFB',
                xl: '1px solid #FBFBFB',
              },
              backdropFilter: { xs: '0', md: 'blur(100px)', xl: 'blur(100px)' },
              borderRadius: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'end',
              paddingX: '2rem',
              marginTop: '2rem',
            }}
            className="IllustrationDesktopLayout"
          >
            <Box
              sx={{
                height: '558px',
                width: { xs: '88%', xl: '80%' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
              className="IllustrationDesktopLayoutBox"
            >
              {children}
            </Box>
          </Box>
          {locale === 'ar' ? (
            <Box
              sx={{
                paddingLeft: '15rem',
                zIndex: '999999',
              }}
            >
              <ButtonStyleDesktop />
            </Box>
          ) : (
            <Box
              sx={{
                paddingRight: '15rem',
                zIndex: '999999',
              }}
            >
              <ButtonStyleDesktop />
            </Box>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
        }}
      >
        <Footer />
      </Box>
    </div>
  )
}

export default LayoutDesktop
