import React, { useState, useEffect } from 'react'
import { Box } from '@mui/system'

import { BackgroundHome } from './Background'

import { useTranslation } from 'next-i18next'

import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../Navbar/Navbar'), {
  ssr: false,
})
const Footer = dynamic(() => import('../Footer/FooterHome'), {
  ssr: false,
})

interface Props {
  children: React.ReactNode
  onClick: () => void
}
const Layout: React.FC<Props> = ({ children, onClick }) => {
  const { t } = useTranslation('common')

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
        maxWidth: '100%',
      }}
    >
      <Box
        sx={{
          height: { xs: '100vh', md: '100vh', xl: '100%' },
          // background: "#EAEDED",
          marginY: 'auto',
        }}
        className="layoutHomeOverflow"
      >
        {showSlider && <BackgroundHome />}

        <Box
          sx={{
            maxWidth: '100%',
            margin: 'auto',
            height: { xs: '100vh', md: '100vh', xl: '100vh' },
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
          }}
          className="LayoutHomeMobil"
        >
          <Header
            nameOne={t('nav_subscribe')}
            linkOne="/subscribe"
            nameTwo={t('nav_examples')}
            linkTwo="/example"
            nameThree={t('nav_login')}
            linkThree="/login"
          />
          <Box
            sx={{
              position: 'relative',
              width: { xs: '115%', sm: '100%', md: '100%', xl: '100%' },
              height: { xs: '470px', sm: '500px', md: '540px', xl: '610px' },
              background: 'rgba(251, 251, 251, 0.6)',
              border: '1px solid #FBFBFB',
              backdropFilter: 'blur(100px)',
              borderRadius: '30px',
              transform: {
                xs: 'skew(-16deg, 0deg)',
                sm: 'skew(-16deg, 0deg)',
                md: 'skew(-16deg, 0deg)',
                xl: 'skew(-16deg, 0deg)',
              },
              paddingY: { xs: '2rem', md: '0' },
            }}
            className="BoxHomeLayout"
          >
            {children}
          </Box>
          <Footer onClick={onClick} />
        </Box>
      </Box>
    </Box>
  )
}

export default Layout
