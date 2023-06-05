import { Box, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

const ThreeBox = () => {
  const { t } = useTranslation('example')

  return (
    <>
      <Box
        sx={{
          maxWidth: '100%',
          width: '100%',
          height: '590px',
          position: 'relative',
          top: '-2rem',
          borderRadius: '14px',
          border: '0.484848px solid #FBFBFB',
          backdropFilter: 'blur(48.4848px)',
          background:
            'linear-gradient(53.34deg, rgba(0, 144, 236, 0.3) 4.06%, rgba(0, 144, 236, 0.015) 63.3%)',
        }}
        className="ThreeBoxTablet"
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
          className="ThreeBoxTabletLayout"
        >
          <Box
            sx={{
              position: 'absolute',
              width: { sm: '480px', md: '590px' },
              height: '482px',
            }}
            className="ThreeBoxTabletLayoutImage"
          >
            <img
              src="/images/pic.webp"
              title="Your costumers in a Blink will be automatically redirected to your Sub-link-URL"
              alt="Your costumers in a Blink will be automatically redirected to your Sub-link-URL, your dashboard will show you all the conversions of your #keyword, it is your opportunity to optimize"
              style={{
                width: '100%',
                height: 'auto',
              }}
              loading="lazy"
            />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              width: { xs: '', sm: '330px', md: '400px' },
              height: '250px',
            }}
            className="ThreeBoxTabletLayoutText"
          >
            <Typography
              sx={{
                fontSize: { xs: '24px', md: '28px' },
                fontWeight: '500',
                lineHeight: '18px',
                marginY: '1rem',
              }}
            >
              {t('box_three_title')}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '20px', md: '24px' },
                lineHeight: { xs: '20px', sm: '20px', md: '20px' },
                fontWeight: '300',
              }}
            >
              {t('box_three_desc')}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ThreeBox
