import { useRouter } from 'next/router'
import { Box, Typography } from '@mui/material'

import SwiperCore, { Thumbs } from 'swiper'
import 'swiper/swiper.min.css'

SwiperCore.use([Thumbs])

const SwiperLabel = ({ selectedKeyword }: any) => {
  const { locale } = useRouter()

  return (
    <>
      {locale === 'ar' ? (
        <Box
          sx={{
            position: { xs: 'relative', md: 'absolute' },
            top: { xs: '10px', sm: '2rem', md: '2rem', xl: '0' },
            left: { xs: '', md: '2rem' },
          }}
        >
          <img
            src="/images/cut-out-parallelogram.webp"
            alt="Layout Box View on Website"
            title="Layout Box View on Website"
            style={{
              width: '230px',
              height: '100px',
            }}
            loading="lazy"
          />
          <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              top: '0',
              left: '0',
              right: '0',
            }}
          >
            <Typography
              sx={{
                fontSize: '36px',
                fontWeight: '600',
                lineHeight: '70px',
                color: '#31E716',
                height: '70px',
                textTransform: 'uppercase',
              }}
            >
              #{selectedKeyword}
            </Typography>
            <Typography
              sx={{
                fontSize: '17px',
                fontWeight: '600',
                lineHeight: '13px',
                color: '#0090EC',
              }}
            >
              ViewOnWebsite.com
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            position: { xs: 'relative', md: 'absolute' },
            top: { xs: '', md: '1.3rem', xl: '-2rem' },
            right: { xs: '', md: '5rem' },
          }}
        >
          <img
            src="/images/cut-out-parallelogram.webp"
            alt="Layout Box View on Website"
            title="Layout Box View on Website"
            style={{
              width: '230px',
              height: '100px',
            }}
            loading="lazy"
          />
          <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              top: '0',
              left: '0',
              right: '0',
            }}
          >
            <Typography
              sx={{
                fontSize: '36px',
                fontWeight: '600',
                lineHeight: '70px',
                color: '#31E716',
                height: '70px',
                textTransform: 'uppercase',
              }}
            >
              #{selectedKeyword}
            </Typography>
            <Typography
              sx={{
                fontSize: '17px',
                fontWeight: '600',
                lineHeight: '13px',
                color: '#0090EC',
              }}
            >
              ViewOnWebsite.com
            </Typography>
          </Box>
        </Box>
      )}
    </>
  )
}

export default SwiperLabel
