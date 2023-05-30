import { Box } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const ImageBackground = () => {
  const { locale } = useRouter()
  return (
    <>
      {locale === 'ar' ? (
        <>
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
            }}
          >
            <Image
              alt="View On Website background Footer"
              title="View On Website background Footer"
              fill
              src="/images/swirl.webp"
              style={{
                width: '100%',
                right: '15rem',
                top: '-0rem',
              }}
            />
          </Box>
          <Box
            sx={{
              display: { xs: 'block', sm: 'none' },
            }}
          >
            <Image
              alt="View On Website background Footer"
              title="View On Website background Footer"
              fill
              src="/images/swirl.webp"
              style={{
                width: '100%',
                right: '10rem',
                top: '-0rem',
              }}
            />
          </Box>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
            }}
          >
            <Image
              alt="View On Website background Footer"
              title="View On Website background Footer"
              fill
              src="/images/swirl.webp"
              style={{
                width: '100%',
                left: '-15rem',
                top: '2rem',
              }}
            />
          </Box>
          <Box
            sx={{
              display: { xs: 'block', sm: 'none' },
            }}
          >
            <Image
              alt="View On Website background Footer"
              title="View On Website background Footer"
              fill
              src="/images/swirl.webp"
              style={{
                width: '100%',
                left: '-10rem',
                top: '-0rem',
              }}
            />
          </Box>
        </>
      )}
    </>
  )
}
