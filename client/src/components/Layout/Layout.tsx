import React, { useState, useEffect } from 'react'
import { Box } from '@mui/system'

// components
import { Background } from './Background'
import { BackgroundImageSlider } from '../Slider/BackgroundImage'

// components
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../Navbar/Navbar'), {
  ssr: false,
})
const Footer = dynamic(() => import('../Footer/Footer'), {
  ssr: false,
})
const FooterMobile = dynamic(() => import('../Footer/FooterMobile'), {
  ssr: false,
})

interface Props {
  children: React.ReactNode
  nameOne?: any
  linkOne?: any
  nameTwo?: any
  linkTwo?: any
  nameThree?: any
  linkThree?: any
  nameFour?: any
  linkFour?: any
}
const Layout: React.FC<Props> = ({
  children,
  nameOne,
  linkOne,
  nameTwo,
  linkTwo,
  nameThree,
  linkThree,
  nameFour,
  linkFour,
}) => {
  const [showSlider, setShowSlider] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSlider(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Box
        sx={{
          width: '2162px',
          maxWidth: '100%',
          // background: "#EAEDED",
          overflow: 'hidden',
          height: '96vh',
        }}
      >
        <Box
          sx={{
            margin: 'auto',
            height: { xs: '100%', md: '90vh', xl: '96vh' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {showSlider && <BackgroundImageSlider />}

          <Header
            nameOne={nameOne}
            linkOne={linkOne}
            nameTwo={nameTwo}
            linkTwo={linkTwo}
            nameThree={nameThree}
            linkThree={linkThree}
            nameFour={nameFour}
            linkFour={linkFour}
          />
          {/* background Layout */}

          <Box
            className="LayoutBox"
            sx={{
              position: 'relative',
              width: { xs: '564px', sm: '100%', md: '100%', xl: '100%' },
              height: { xs: '100%', sm: '100%', md: '650px', xl: '650px' },
              background: 'rgba(251, 251, 251, 0.6)',
              border: '1px solid #FBFBFB',
              backdropFilter: 'blur(100px)',
              borderRadius: '30px',
              transform: 'skew(-16deg, 0deg)',
              // overflow: { xs: "", md: "hidden", xl: "hidden" },
              margin: '3rem auto',
              zIndex: '999',
              paddingX: '2rem',
              paddingY: '7px',
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
      <Footer />
      <FooterMobile />
    </>
  )
}

export default Layout
