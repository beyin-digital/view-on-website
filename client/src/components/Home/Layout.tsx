import React from 'react'
import dynamic from 'next/dynamic'
import { Box } from '@mui/material'
import Footer from '@/components/Footer/FooterHome'
import { BackgroundHome } from '@/components/Layout/Background'
import Header from '@/components/Navbar/Navbar'
import { useTranslation } from 'next-i18next'
import HomeForm from '@/components/Home/HomeForm'
import TextViewOnWeb from '@/components/Home/TextViewOnWeb'
import { useRouter } from 'next/router'

const HeaderDe = dynamic(() => import('@/components/Home/HeaderHome'), {
  ssr: false,
})
interface Props {
  children: React.ReactNode
  onClick: any
}
const Layout: React.FC<Props> = ({ children, onClick }) => {
  const { locale } = useRouter()

  return (
    <Box
      sx={{
        maxWidth: '100%',
        // overflowX: "hidden",
        minHeight: '100%',
      }}
    >
      {/* <Header /> */}
      {locale === 'ar' ? (
        <Box
          sx={{
            margin: 'auto',
            width: '100%',
            position: { xs: 'relative', md: 'fixed' },
            height: { xs: '100vh', md: '100vh', xl: '100vh' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflow: 'hidden',
          }}
        >
          <BackgroundHome />

          <Header />

          <Box
            className="LayoutBoxHomeAll"
            sx={{
              position: 'relative',
              width: { xs: '100%', sm: '100%', md: '100%', xl: '100%' },
              height: { xs: '500px', sm: '650px', md: '650px', xl: '650px' },
              background: 'rgba(251, 251, 251, 0.6)',
              border: '1px solid #FBFBFB',
              backdropFilter: 'blur(100px)',
              borderRadius: '30px',
              transform: 'skew(-16deg, 0deg)',
              margin: '3rem auto',
              zIndex: '999',
              paddingX: '2rem',
              paddingY: '7px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginLeft: { xs: '-1rem', sm: '3rem', md: '10rem', xl: '16rem' },
            }}
          >
            {children}
          </Box>

          <Footer onClick={onClick} />
        </Box>
      ) : (
        <Box
          sx={{
            margin: 'auto',
            width: '100%',
            position: { xs: 'relative', md: 'fixed' },
            height: { xs: '100vh', md: '100vh', xl: '100vh' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflow: 'hidden',
          }}
        >
          <BackgroundHome />

          <Header />

          <Box
            className="LayoutBoxHomeAll"
            sx={{
              position: 'relative',
              width: { xs: '100%', sm: '100%', md: '100%', xl: '100%' },
              height: { xs: '500px', sm: '650px', md: '650px', xl: '650px' },
              background: 'rgba(251, 251, 251, 0.6)',
              border: '1px solid #FBFBFB',
              backdropFilter: 'blur(100px)',
              borderRadius: '30px',
              transform: 'skew(-16deg, 0deg)',
              margin: '3rem auto',
              zIndex: '999',
              paddingX: '2rem',
              paddingY: '7px',
              display: 'flex',
              alignItems: { xs: 'flex-start', sm: 'baseline', md: 'center' },
              justifyContent: 'end',
              marginLeft: { xs: '0', sm: '-3rem', md: '-10rem', xl: '-16rem' },
            }}
          >
            {children}
          </Box>

          <Footer onClick={onClick} />
        </Box>
      )}
    </Box>
  )
}

export default Layout
