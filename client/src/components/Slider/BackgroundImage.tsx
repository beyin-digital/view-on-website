import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export const BackgroundImage = () => {
  return (
    <>
      <Box>
        <img
          src="/images/swirl.webp"
          style={{
            bottom: '5rem',
            position: 'absolute',
            left: '-10rem',
            zIndex: '-9',
          }}
          loading="lazy"
        />
      </Box>
    </>
  )
}

export const BackgroundImageSlider = () => {
  return (
    <>
      <img
        src="/images/swirl.webp"
        style={{
          bottom: '10rem',
          position: 'absolute',
          left: '0rem',
          zIndex: '-999999999999',
          width: '100%',
        }}
        loading="lazy"
        className="SliderImageMobileNone"
      />
      <img
        src="/images/swirl.webp"
        style={{
          bottom: '40rem',
          position: 'absolute',
          left: '0rem',
          zIndex: '-9',
          width: '100%',
        }}
        loading="lazy"
        className="SliderImageMobile"
      />
    </>
  )
}
