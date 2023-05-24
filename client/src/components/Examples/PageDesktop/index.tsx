import { Box } from '@mui/material'

import { useRouter } from 'next/router'

// components
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

const PageDesktop = () => {
  const { locale } = useRouter()

  return (
    <>
      <Box
        className="PageDesktop"
        sx={{
          width: '1920px',
          // maxWidth: "100%",
          // overflow: "hidden",
        }}
      >
        <Box
          my="auto"
          sx={{
            height: { xs: '100%', md: '100vh', xl: '88vh' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: { xs: '100%', md: '110vw', xl: '110vw' },
            overflow: 'hidden',
            position: 'relative',
            flexDirection: 'column',
            maxHeight: '88vh',
          }}
          className="PageDesktopMargin"
        >
          <Box
            sx={{
              height: { xs: '100%', md: '620px', xl: '590px' },
              width: { xs: '100%', md: '1920px', xl: '1920px' },
              maxWidth: '100%',
              borderTop: '1px solid #FBFBFB',
              borderBottom: '1px solid #FBFBFB',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row', xl: 'row' },
              overflow: 'hidden',
              background: 'rgba(251, 251, 251, 0.6)',
              marginX: { xs: '', md: '0rem', xl: '0' },
              position: 'absolute',
              left: '0',
            }}
            className="PageDesktopLayout"
          >
            {/* Slider One */}
            <OneBox />

            {locale === 'ar' ? (
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: '0rem', lg: '18rem', xl: '17rem' },
                  right: {
                    xs: '0',
                    sm: '',
                    md: '40rem',
                    lg: '44rem',
                    xl: '60rem',
                  },
                  zIndex: '91',
                  width: {
                    xs: '0',
                    sm: '',
                    md: '500px',
                    lg: '500px',
                    xl: '500px',
                  },
                  height: {
                    xs: '0',
                    sm: '',
                    md: '500px',
                    lg: '300px',
                    xl: '300px',
                  },
                }}
                className="sliderArrowsOn"
              >
                <img
                  src="/icons/arrowLeftExampleAR.png"
                  alt="icon arrow Left"
                  title="icon arrow Left"
                  style={{
                    width: '100%',
                  }}
                  loading="lazy"
                />
              </Box>
            ) : (
              <Box
                sx={{
                  position: 'absolute',
                  top: { md: '20rem', xl: '18rem' },
                  right: {
                    // md: "55rem",
                    lg: '56rem',
                    xl: '65rem',
                  },
                  zIndex: '99999',
                  width: { xs: '', sm: '', md: '', lg: '300px', xl: '320px' },
                  height: { xs: '', sm: '', md: '', lg: '300px', xl: '320px' },
                }}
                className="sliderArrowsOne"
              >
                <img
                  src="/icons/arrowLeftExample.png"
                  alt="icon arrow Left"
                  title="icon arrow Left"
                  style={{
                    width: '100%',
                  }}
                  loading="lazy"
                />
              </Box>
            )}
            {/* Slider Two */}
            <TwoBox />
            <>
              {locale === 'ar' ? (
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: '', sm: '', md: '', lg: '19rem', xl: '18rem' },
                    right: {
                      xs: '',
                      sm: '',
                      md: '',
                      lg: '22rem',
                      xl: '25.3rem',
                    },
                    width: { xs: '', sm: '', md: '', lg: '300px', xl: '400px' },
                    height: {
                      xs: '',
                      sm: '',
                      md: '',
                      lg: '500px',
                      xl: '600px',
                    },

                    zIndex: '9',
                  }}
                >
                  <img
                    src="/icons/arrowExampleAR.png"
                    alt="icon arrow Left"
                    title="icon arrow Left"
                    style={{
                      width: '100%',
                    }}
                    loading="lazy"
                  />
                </Box>
              ) : (
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: '', sm: '', md: '', lg: '10rem', xl: '14.5rem' },
                    right: {
                      xs: '',
                      sm: '',
                      md: '',
                      lg: '20rem',
                      xl: '19.5rem',
                    },
                    width: { xs: '', sm: '', md: '', lg: '500px', xl: '600px' },
                    height: {
                      xs: '',
                      sm: '',
                      md: '',
                      lg: '500px',
                      xl: '600px',
                    },

                    zIndex: '9',
                  }}
                >
                  <img
                    src="/icons/arrowExample.png"
                    alt="icon arrow Left"
                    title="icon arrow Left"
                    style={{
                      width: '100%',
                    }}
                    loading="lazy"
                  />
                </Box>
              )}

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
