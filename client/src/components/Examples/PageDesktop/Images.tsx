import { Box } from '@mui/material'
import React from 'react'

export const ImagesOneBoxAR = () => {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '0rem', lg: '18rem', xl: '17rem' },
          right: {
            xs: '0',
            sm: '',
            md: '40rem',
            lg: '56rem',
            xl: '60rem',
          },
          zIndex: '91',
          width: {
            xs: '0',
            sm: '',
            md: '500px',
            lg: '424px',
            xl: '450px',
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
    </>
  )
}

export const ImagesOneBoxEN = () => {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: { md: '20rem', xl: '18rem' },
          right: {
            lg: '66rem',
            xl: '67rem',
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
    </>
  )
}

export const ImagesTwoBoxAR = () => {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '', sm: '', md: '', lg: '19rem', xl: '18rem' },
          right: {
            xs: '',
            sm: '',
            md: '',
            lg: '28rem',
            xl: '23rem',
          },
          width: { xs: '', sm: '', md: '220px', lg: '223px', xl: '400px' },
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
    </>
  )
}
export const ImagesTwoBoxEN = () => {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '', sm: '', md: '', lg: '13rem', xl: '14.5rem' },
          right: {
            xs: '',
            sm: '',
            md: '',
            lg: '32rem',
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
    </>
  )
}
