import { Box } from '@mui/material'
import Image from 'next/image'

export const Background = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        // backdropFilter:"blur(50px)"
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
            xs: '-1544px',
            sm: '-1544px',
            md: '-1100px',
            xl: '-1000px',
          },
          backgroundPositionX: { xs: '-800px', md: '-600px', xl: '-300px' },
          backgroundRepeat: 'no-repeat',
        }}
        className="ImageBgHom"
      />
    </Box>
  )
}
export const BackgroundHome = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        // backdropFilter:"blur(50px)"
      }}
    >
      <Box
        sx={{
          position: { xs: 'absolute', sm: 'fixed' },
          height: { xs: '890px', sm: '100vh' },
          width: { xs: '867px', sm: '100%' },
          maxWidth: { sm: '100%' },
          minHeight: { sm: '100%' },
          background: "url('/images/swirl.webp')",
          backgroundPositionY: {
            xs: '-1123px',
            sm: '-1044px',
            md: '-1100px',
            xl: '-1000px',
          },
          backgroundPositionX: { xs: '-1074px', md: '-600px', xl: '-300px' },
          backgroundRepeat: 'no-repeat',
        }}
        className="ImageBgHom"
      />
      {/* height: 890px;
    width: 867px;
    background-position-y: -954px;
    x: ;
    background-position-x: -821px; */}
    </Box>
  )
}
