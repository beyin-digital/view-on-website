import { useTranslation } from 'next-i18next'

import { Box, Typography } from '@mui/material'

import dynamic from 'next/dynamic'

const SliderSwiper = dynamic(() => import('../SliderSwiper'), {
  ssr: false,
})

const OneBox = () => {
  const { t } = useTranslation('example')

  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'rgba(251, 251, 251, 0.5)',
          border: ' 0.484848px solid #FBFBFB',
          backdropFilter: 'blur(48.4848px)',
          borderRadius: '14.5455px',
          position: 'relative',
          height: '430px',
        }}
        className="OneBoxMobile"
      >
        <Box
          sx={{
            width: { xs: '100%', sm: '100%', md: '100%' },
            height: '100%',
            paddingX: '1rem',
            position: { xs: 'relative', sm: '', md: 'relative' },
            transform: 'skew(16deg, 0deg)',
            alignItems: 'center',
            justifyContent: {
              xs: 'start',
              sm: 'center',
              md: 'center',
              xl: 'center',
            },
            display: 'flex',
            flexDirection: 'column',
            marginLeft: { xs: '-1.5rem', sm: '0', md: '0', xl: '0' },
          }}
          className="exampleOneBoxStart"
        >
          <Box
            sx={{
              width: { xs: '100%', sm: '70%', md: '60%' },
              height: { xs: '228px', sm: '200px', md: '210px' },
              marginBottom: '1rem',
              position: { xs: 'relative', sm: '' },
              overflow: 'hidden',
              borderRadius: '34px',
            }}
          >
            <SliderSwiper />
          </Box>
          <Box
            sx={{
              position: 'relative',
              paddingX: '0rem',
              display: 'flex',
              alignItems: 'center',
              marginX: { xs: '.1rem', sm: '2rem' },
              width: '100%',
            }}
            className="exampleOneBoxMobileText"
          >
            <Box
              sx={{
                width: { xs: '65%', sm: '322px', md: '50%' },
                height: '134px',
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '20px', sm: '24px' },
                  fontWeight: '500',
                  lineHeight: '18px',
                }}
                className="ExampleBoxOnePlace"
              >
                {t('box_one_title')}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '13px', sm: '16px', md: '20px' },
                  lineHeight: { xs: '18px', sm: '20px', md: '20px' },
                  fontWeight: '300',
                  marginY: '.8rem',
                }}
                className="exampleOneBoxTextSmall"
              >
                {t('box_one_desc')}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: '270px', sm: '300px', md: '355px' },
            height: '213px',
            position: 'absolute',
            bottom: '0',
            right: { xs: '-3rem', md: '0rem' },
            zIndex: '9999',
            transform: 'skew(16deg, 0deg)',
          }}
        >
          <img
            src="/images/phone.webp"
            alt="View On Website Man Look at Phone"
            title="View On Website Man Look at Phone"
            style={{
              width: '100%',
            }}
            loading="lazy"
          />
        </Box>
      </Box>
    </>
  )
}

export default OneBox
