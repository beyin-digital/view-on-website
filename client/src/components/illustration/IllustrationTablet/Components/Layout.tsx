import Footer from '@/components/Footer/Footer'
import { Box } from '@mui/material'
import React from 'react'
import { ButtonStyleMobile } from '.'
import { Background } from '@/components/Layout/Background'

interface Props {
  children: React.ReactNode
}
const LayoutMobile: React.FC<Props> = ({ children }) => {
  return (
    <Box className="IllustrationTablet">
      <Box
        sx={{
          position: 'fixed',
          height: '100vh',
          width: '2192px',
          maxWidth: '100%',
        }}
      >
        <Background />

        <Box
          sx={{
            width: '2192px',
            maxWidth: '100%',
            height: { xs: '100%', md: '100vh', xl: '88vh' },
            display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              maxWidth: '100%',
              margin: 'auto',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              // justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                maxWidth: '100%',
                width: '100%',
                height: { xs: '100%', sm: '100%', md: '80vh', xl: '650px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
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
                backdropFilter: {
                  xs: '0',
                  md: 'blur(100px)',
                  xl: 'blur(100px)',
                },
                marginTop: '2rem',
              }}
            >
              <Box
                sx={{
                  height: '68vh',
                  width: { xs: '98%', xl: '80%' },
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {children}
              </Box>
            </Box>
          </Box>
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
    </Box>
  )
}

export default LayoutMobile
