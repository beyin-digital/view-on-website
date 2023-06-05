import { Box, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

const TwoBox = () => {
  const { t } = useTranslation('example')

  return (
    <>
      <Box
        sx={{
          maxWidth: '100%',
          width: '100%',
          height: '597px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          background: '#EAEDED',
          //   backdropFilter: 'blur(48px)',
        }}
        className="TwoBoxTabletLayout"
      >
        <Box
          sx={{
            width: '35%',
          }}
        >
          <Typography
            sx={{
              height: '100%',
              fontSize: { xs: '24px', md: '28px' },
              fontWeight: '700',
              lineHeight: '18px',
              marginY: '1rem',
            }}
          >
            {t('box_two_title')}
          </Typography>
          <Typography
            sx={{
              height: '100%',
              fontSize: '20px',
              lineHeight: { xs: '20px', md: '24px' },
              fontWeight: '300',
              marginY: '1rem',
            }}
          >
            {t('box_two_desc')}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: '60%', md: '50%' },
            height: '597px',
            backdropFilter: 'blur(48px)',
            background:
              ' linear-gradient(48.32deg, rgba(34, 71, 23, 0.3) 2.06%, rgba(49, 231, 22, 0.012) 57.16%)',
            border: ' 0.484848px solid #FBFBFB',
            borderRadius: '14.5455px',
            position: 'relative',
            top: '-1rem',
          }}
          className="TwoBoxTablet"
        >
          <Box
            sx={{
              width: { xs: '342px', md: '342px' },
              height: { xs: '462px', md: '462px' },
            }}
            className="TwoBoxTabletImage"
          >
            <img
              src="/images/mobile.webp"
              alt="View On Website Photo Inter Keyword"
              title="View On Website Photo Inter Keyword"
              style={{
                width: '100%',
                objectFit: 'cover',
              }}
              loading="lazy"
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default TwoBox
