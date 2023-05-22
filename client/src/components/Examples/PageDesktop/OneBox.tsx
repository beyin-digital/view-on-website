import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import { Box, Typography } from '@mui/material'

// components
import SliderSwiper from '../SliderSwiper'

const OneBox = () => {
  const { t } = useTranslation('example')
  const { locale } = useRouter()

  return (
    <Box
      sx={{
        width: '1243.72px',
        maxWidth: '100%',
        height: '100%',
      }}
      className="OneBoxDesktop"
      id="anime"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          backdropFilter: 'blur(100px)',
          height: '100%',
        }}
        className="OneBoxDesktopLayout animee"
      >
        <Box>
          <Box
            sx={{
              width: { md: '400px', xl: '422px' },
              height: '258px',
              borderRadius: '34px',
              marginY: '1rem',
              overflow: 'hidden',
              position: 'relative',
              zIndex: '3',
            }}
            className="OneBoxDesktopLayoutSlid"
          >
            <SliderSwiper />
          </Box>
          <Box
            sx={{
              position: 'relative',
              zIndex: '9',
              paddingX: '0rem',
              height: '100%',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-evenly',
            }}
            className="OneBoxDesktopLayoutSlid"
          >
            <Box
              sx={{
                width: '210px',
                height: '134px',
                position: 'absolute',
              }}
              className="OneBoxDesktopLayoutText"
            >
              <Typography
                sx={{
                  fontSize: '20px',
                  fontWeight: '600',
                  lineHeight: '20px',
                  marginY: '1.5rem',
                }}
              >
                {t('box_one_title')}
              </Typography>
              <Typography
                sx={{
                  fontSize: '14px',
                  marginY: '1rem',
                  lineHeight: '14px',
                  fontWeight: '400',
                }}
              >
                {t('box_one_desc')}
              </Typography>
            </Box>
          </Box>

          {locale === 'ar' ? (
            <Box
              sx={{
                width: '500x',
                height: '350px',
                position: 'absolute',
                zIndex: '999',
              }}
              className="OneBoxDesktopLayoutImage"
            >
              <img
                src="/images/exampleBoxOneIconRight.png"
                alt="Example Box One Icon Right View On Website"
                title="Example Box One Icon Right View On Website"
                style={{
                  position: 'absolute',
                  right: '12rem',
                  top: '-3rem',
                  zIndex: '9',
                }}
                loading="lazy"
              />
              <img
                src="/images/phoneAR.png"
                alt="Phone Vow Left"
                title="Phone Vow Left"
                style={{
                  width: '100%',
                }}
                loading="lazy"
              />
            </Box>
          ) : (
            <Box
              sx={{
                width: '800x',
                height: '360px',
                position: 'absolute',
                right: '0',
                zIndex: '999',
              }}
              className="OneBoxDesktopLayoutImage"
            >
              <img
                src="/images/exampleBoxOneIconLeft.png"
                alt="Example Box One Icon Left View On Website"
                title="Example Box One Icon Left View On Website"
                style={{
                  position: 'absolute',
                  right: '12rem',
                  top: '-3rem',
                }}
                loading="lazy"
              />
              <img
                src="/images/phone.png"
                alt="Phone Vow Left View On Website"
                title="Phone Vow Left View On Website"
                style={{
                  width: '100%',
                  height: '100%',
                }}
                loading="lazy"
              />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default OneBox
