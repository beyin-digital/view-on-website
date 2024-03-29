import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import { Box, Typography } from '@mui/material'

const TwoBox = () => {
  const { t } = useTranslation('example')
  const { locale } = useRouter()

  return (
    <>
      {/* translate AR */}
      {locale === 'ar' ? (
        <Box
          sx={{
            width: '700px',
            maxWidth: '100%',
            borderLeft: '1px solid #FBFBFB',
            borderBottom: '1px solid #FBFBFB',
            borderTopLeftRadius: '30px',
            borderBottomLeftRadius: '30px',
            backdropFilter: 'blur(100px)',
            background:
              ' linear-gradient(48.32deg, rgba(34, 71, 23, 0.3) 2.06%, rgba(49, 231, 22, 0.012) 57.16%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            right: '-1.5rem',
            zIndex: '9',
          }}
        >
          <Box
            sx={{
              transform: 'skew(-16deg, 0deg)',
              marginTop: '2rem',
              marginX: '2rem',
            }}
          >
            <Typography
              sx={{
                width: { md: '100%', xl: '200px' },
                fontSize: '20px',
                lineHeight: '20px',
                fontWeight: '600',
                marginY: '1.5rem',
              }}
            >
              {t('box_two_title')}
            </Typography>
            <Typography
              sx={{
                width: { md: '100%', xl: '300px' },
                fontSize: '14px',
                lineHeight: '19px',
                fontWeight: '400',
                marginY: '.5rem',
              }}
            >
              {t('box_two_desc')}
            </Typography>
          </Box>
          <Box
            sx={{
              transform: 'skew(-16deg, 0deg)',
              height: '432px',
              position: 'absolute',
              bottom: '0',
              right: '0',
            }}
          >
            <img
              src="/images/mobile.webp"
              alt="View On Website Photo Inter Keyword"
              title="View On Website Photo Inter Keyword"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              loading="lazy"
            />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: '750px',
            maxWidth: '100%',
            borderLeft: '1px solid #FBFBFB',
            borderBottom: '1px solid #FBFBFB',
            borderTopLeftRadius: '30px',
            borderBottomLeftRadius: '30px',
            backdropFilter: 'blur(100px)',
            background:
              ' linear-gradient(48.32deg, rgba(34, 71, 23, 0.3) 2.06%, rgba(49, 231, 22, 0.012) 57.16%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            right: '-1.5rem',
          }}
        >
          <Box
            sx={{
              transform: 'skew(16deg, 0deg)',
              marginTop: '2rem',
              marginX: '2rem',
            }}
          >
            <Typography
              sx={{
                width: { md: '200px', xl: '200px' },
                fontSize: '20px',
                lineHeight: '20px',
                fontWeight: '600',
                marginY: '1.5rem',
              }}
            >
              {t('box_two_title')}
            </Typography>
            <Typography
              sx={{
                width: { md: '300px', xl: '300px' },
                fontSize: '14px',
                lineHeight: '14px',
                fontWeight: '400',
                marginY: '.5rem',
              }}
            >
              {t('box_two_desc')}
            </Typography>
          </Box>
          <Box
            sx={{
              transform: 'skew(16deg, 0deg)',
              height: '432px',
              position: 'absolute',
              bottom: '0',
              right: '0',
            }}
          >
            <img
              src="/images/mobile.webp"
              alt="View On Website Photo Inter Keyword"
              title="View On Website Photo Inter Keyword"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              loading="lazy"
            />
          </Box>
        </Box>
      )}
    </>
  )
}

export default TwoBox
