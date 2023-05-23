import { Box, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

const TwoBox = () => {
  const { t } = useTranslation('example')

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          top: '0rem',
        }}
        className="ExampleBoxTwo"
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', sm: '100%', md: '100%' },
              height: '366px',
              position: 'relative',
              transform: 'skew(-16deg, 0deg)',
            }}
          >
            <Box
              sx={{
                width: { xs: '100%', md: '50%' },
                position: 'absolute',
                left: { xs: '.5rem', sm: '2rem' },

                zIndex: '9999',
              }}
              className="ExampleBoxTwoMobile"
            >
              <Box
                sx={{
                  marginTop: { xs: '-2rem', sm: '-1rem', xl: '7rem' },
                  marginX: { xs: '0rem', md: '1rem' },
                  zIndex: '999999999',
                  position: 'relative',
                }}
              >
                <Typography
                  sx={{
                    width: { xs: '97px', sm: '30%', md: '50%' },
                    height: '100%',
                    fontSize: { xs: '15px', sm: '24px', md: '24px' },
                    fontWeight: '600',
                    lineHeight: '25px',

                    marginY: '1rem',
                  }}
                >
                  {t('box_two_title')}
                </Typography>
                <Typography
                  sx={{
                    width: { xs: '50%', sm: '40%', md: '80%' },
                    height: '100%',
                    fontSize: { xs: '13px', sm: '20px', md: '20px' },
                    lineHeight: { xs: '15px', sm: '20px', md: '20px' },
                    fontWeight: '300',
                    marginY: '1rem',
                    paddingRight: '.5rem',
                  }}
                >
                  {t('box_three_desc')}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: '75%', sm: '70%', md: '60%' },
                height: '100%',
                backdropFilter: 'blur(48px)',
                background:
                  'radial-gradient(35.03% 67.6% at 17.29% 50.07%, rgba(49, 231, 22, 0.3) 0%, rgba(49, 231, 22, 0.012) 100%)',
                backgroundRepeat: 'no-repeat',
                borderRadius: '14px',
                border: '1px solid #FBFBFB',
                backgroundSize: 'cover',
                position: 'absolute',
              }}
              className="ExampleBoxTwoMobileImage"
            >
              <Box
                sx={{
                  height: { xs: '300px', sm: '350px', md: '350px' },
                  position: 'absolute',
                }}
                className="ExampleBoxTwoPi ExampleBoxTwoImageMobile"
              >
                <img
                  src="/images/mobile.webp"
                  alt="View On Website Photo Inter Keyword"
                  title="View On Website Photo Inter Keyword"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                  // loading="lazy"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default TwoBox
