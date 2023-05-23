import { Box } from '@mui/material'

// components
import dynamic from 'next/dynamic'

import { LinkSubscribe } from '@/components/Button'
import OneBox from './OneBox'
import TwoBox from './TwoBox'
import ThreeBox from './ThreeBox'
const PageMobile = () => {
  return (
    <Box
      className="PageMobile"
      sx={{
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        my="auto"
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '-100rem',
          }}
        >
          <img
            src="/images/swirl.webp"
            alt="Background View On Website"
            title="Background View On Website"
            loading="lazy"
          />
        </Box>
        <Box
          m="auto"
          sx={{
            height: '100%',
            width: '100%',
            maxWidth: '100%',

            margin: '5rem 0',
            position: 'relative',
          }}
        >
          {/* Slider One */}
          <OneBox />
          {/* Slider Two */}
          <TwoBox />

          {/* Slider Three */}
          <ThreeBox />
          {/* Link */}
          <Box
            sx={{
              width: { xs: '100%', sm: '85%', md: '85%', xl: '85%' },
              height: '90px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <LinkSubscribe />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default PageMobile
