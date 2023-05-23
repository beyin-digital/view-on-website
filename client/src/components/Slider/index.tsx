// import Header from '@/components/Navbar/Navbar'
import { Box } from '@mui/material'

// // layout
// import Footer from '@/components/Footer/Footer'
// import FooterMobile from '@/components/Footer/FooterMobile'

// // components
// import SwiperSlider from './CenterLayout/SwiperSlider'
// import FooterLayout from './FooterLayout/FooterLayout'
// import HeaderLayout from './TopLayout/HeaderLayout'
// import TextPremium from './TopLayout/TextPremium'
// import TextAndButton from './TextAndButton'
import { BackgroundImageSlider } from './BackgroundImage'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
// components
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/Navbar/Navbar'), {
  ssr: false,
})
const Footer = dynamic(() => import('@/components/Footer/Footer'), {
  ssr: false,
})
const FooterMobile = dynamic(() => import('@/components/Footer/FooterMobile'), {
  ssr: false,
})
const SwiperSlider = dynamic(() => import('./CenterLayout/SwiperSlider'), {
  ssr: false,
})
const FooterLayout = dynamic(() => import('./FooterLayout/FooterLayout'), {
  ssr: false,
})
const HeaderLayout = dynamic(() => import('./TopLayout/HeaderLayout'), {
  ssr: false,
})
const TextPremium = dynamic(() => import('./TopLayout/TextPremium'), {
  ssr: false,
})
const TextAndButton = dynamic(() => import('./TextAndButton'), {
  ssr: false,
})

const SliderDesktop = ({ onClick, selectedImage }: any) => {
  const { locale } = useRouter()
  const [showSlider, setShowSlider] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSlider(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])
  return (
    <Box
      sx={{
        width: '100%',
        zIndex: '9999999',
      }}
    >
      {/* <Header /> */}

      <Box
        sx={{
          maxWidth: '100%',
          margin: 'auto',
          height: { xs: '', md: '89vh' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        {showSlider && <BackgroundImageSlider />}
        <Box
          sx={{
            position: 'relative',
            marginTop: '1rem',
            marginBottom: '1rem',
          }}
        >
          {/* Text Premium top layout */}
          <TextPremium onClick={onClick} />
          {/* layout Box */}
          <Box
            sx={{
              position: 'relative',
              top: '2.5rem',
              right: { xs: '0%', sm: '0%', md: '0%', xl: '20%' },
              maxWidth: '100%',
              width: '100%',
              height: { xs: '100%', sm: '100vh', md: '550px', xl: '520px' },
              background: 'rgba(251, 251, 251, 0.6)',
              border: '1px solid #FBFBFB',
              backdropFilter: 'blur(100px)',
              borderRadius: '30px',
              transform: { xs: '', md: '', xl: 'skew(-16deg, 0deg)' },
              overflow: { xs: 'hidden', md: 'hidden', xl: 'hidden' },
              paddingY: '2rem',
              marginTop: { xs: '4rem', md: '0' },
            }}
          >
            <>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: { xs: 'center', xl: 'end' },
                }}
              >
                {locale === 'ar' ? (
                  <Box
                    sx={{
                      width: { xs: '100%', md: '100%', xl: '80%' },
                      height: '90%',
                      transform: { xs: '', md: '', xl: 'skew(16deg, 0deg)' },
                      // paddingX: { xs: "1rem", md: "2rem", xl: "6rem" },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                      alignItems: 'end',
                    }}
                  >
                    {/* text top layout */}
                    <HeaderLayout selectedImage={selectedImage} />{' '}
                    {/* slider swipre */}
                    <SwiperSlider swiper="" />
                    {/* footer layout And Button Reserve   */}
                    <FooterLayout />
                  </Box>
                ) : (
                  <Box
                    sx={{
                      width: { xs: '100%', md: '100%', xl: '80%' },
                      height: '90%',
                      transform: { xs: '', md: '', xl: 'skew(16deg, 0deg)' },
                      paddingX: { xs: '1rem', md: '2rem', xl: '6rem' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-around',
                    }}
                  >
                    {/* text top layout */}
                    <HeaderLayout selectedImage={selectedImage} />
                    {/* slider swipre */}
                    <SwiperSlider swiper="" />
                    {/* footer layout And Button Reserve   */}
                    <FooterLayout />
                  </Box>
                )}
              </Box>
            </>
          </Box>
        </Box>
        {/* text and button */}
        <TextAndButton />
      </Box>
      <Footer />
      <FooterMobile />
    </Box>
  )
}

export default SliderDesktop
