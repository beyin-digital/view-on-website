import React from 'react'
import { Box } from '@mui/system'

import { Background } from './Background'

// components
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
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100%',
      }}
    >
      <Background />

      <Header />
      <Box
        sx={{
          width: '100vw',
          height: { xs: '90vh', md: '80vh' },
          position: 'fixed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
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
            marginBottom: { xs: '', md: '3rem', xl: '0' },
          }}
          className="BoxHomeLayout"
        >
          {children}
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
        }}
      >
        <Footer onClick={onClick} />
      </Box>
    </Box>
  )
}

export default Layout
