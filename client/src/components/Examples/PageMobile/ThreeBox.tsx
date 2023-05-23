import { useTranslation } from 'next-i18next'

import { Box, Typography } from '@mui/material'

const ThreeBox = () => {
  const { t } = useTranslation('example')

  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          top: '-1rem',
          transform: 'skew(-16deg, 0deg)',
        }}
        className="ExampleThreeBox"
      >
        <Box
          sx={{
            width: { xs: '100%', md: '100%' },
            height: '400px',
            background:
              'radial-gradient(28.05% 49.93% at 21.95% 50.07%, rgba(0, 144, 236, 0.3) 0%, rgba(0, 144, 236, 0.015) 100%) ',
            borderRadius: '14px',
            border: '0.484848px solid #FBFBFB',
            backdropFilter: 'blur(48.4848px)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            marginRight: '-8rem',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: { xs: '0rem', sm: '-1rem', md: '-3rem' },
              right: '0',
              width: { xs: '290px', sm: '350px', md: '492px' },
              height: '365px',
              transform: 'skew(16deg, 0deg)',
            }}
            className="ExampleBoxThreePi"
          >
            <img
              src="/images/pic.webp"
              title="Your costumers in a Blink will be automatically redirected to your Sub-link-URL"
              alt="Your costumers in a Blink will be automatically redirected to your Sub-link-URL, your dashboard will show you all the conversions of your #keyword, it is your opportunity to optimize"
              style={{
                width: '100%',
              }}
              loading="lazy"
            />
          </Box>
          <Box
            sx={{
              width: { xs: '70%', sm: '45%', md: '300px', lg: '40%' },
              position: 'absolute',
              bottom: { xs: '0rem', sm: '2rem', md: '3rem', xl: '3rem' },
              left: { xs: '0rem', sm: '3rem', md: '8rem', lg: '' },
              transform: 'skew(16deg, 0deg)',
              marginRight: '.5rem',
            }}
            className="ExampleBoxThreeText"
          >
            <Typography
              sx={{
                width: { xs: '195px', md: '70%' },
                fontSize: '20px',
                fontWeight: '500',
                lineHeight: '18px',
                marginY: '1rem',
              }}
            >
              {t('box_three_title')}
            </Typography>
            <Typography
              sx={{
                width: { xs: '100%', md: '100%' },
                fontSize: { xs: '13px', sm: '20px', md: '20px' },
                lineHeight: { xs: '12px', sm: '20px', md: '20px' },
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
