import React, { useState, useEffect } from 'react'
import { Box } from '@mui/system'

// components

import dynamic from 'next/dynamic'
import Image from 'next/image'
const Header = dynamic(() => import('../Navbar/NavbarSubscribe'), {
  ssr: false,
})

interface Props {
  children: React.ReactNode
}
const LayoutSubscribe: React.FC<Props> = ({ children }) => {
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
          // maxWidth: "2162px",
          maxWidth: '100%',
          overflow: 'hidden',
          height: { xs: '100%', md: '96vh' },
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
          <Box
            sx={{
              position: 'fixed',
              height: '100vh',
              width: '100%',
              maxWidth: '100%',
              minHeight: '100%',
              background: "url('/images/swirl.webp')",
              backgroundPositionY: {
                xs: '-1500px',
                sm: '-1100px',
                md: '-1100px',
                xl: '-1000px',
              },
              backgroundPositionX: { xs: '-800px', md: '-600px', xl: '-300px' },
              backgroundRepeat: 'no-repeat',
            }}
            className="ImageBgHom"
          />
          {/* <Image
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
          /> */}

          <Header />
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
              transform: { xs: 'skew(0deg, 0deg)', sm: 'skew(-16deg, 0deg)' },
              // overflow: { xs: "", md: "hidden", xl: "hidden" },
              margin: { xs: '5rem auto', sm: '3rem auto' },
              zIndex: '999',
              paddingX: '2rem',
              paddingY: '7px',
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default LayoutSubscribe
