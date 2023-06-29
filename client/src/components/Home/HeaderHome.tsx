import { useTranslation } from 'next-i18next'
import { Box, Typography } from '@mui/material'

// components
import dynamic from 'next/dynamic'
const ModalVideo = dynamic(() => import('./ModalVideo'), {
  ssr: false,
})

const Header = () => {
  // translate
  const { t } = useTranslation('home')

  return (
    <>
      <Box
        sx={{
          width: { xs: '100%', md: '90%', lg: '100%' },
          // height: "200px",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        className="HeaderBoxHome"
      >
        <Box
          sx={{
            width: { xs: '85%', sm: '80%', md: '100%', lg: '100%' },
            px: { xs: '1rem', sm: '1.5rem', md: '0rem', lg: '.1rem' },
          }}
        >
          <Typography
            component={'h1'}
            sx={{
              fontSize: {
                xs: '30px',
                sm: '36px',
                md: '50px',
                lg: '60px',
              },
            }}
            lineHeight="40px"
            letterSpacing="0.02em"
            fontWeight="500"
            className="Textredirected"
          >
            {t('title')}
          </Typography>
          <Typography
            component={'h2'}
            sx={{
              margin: '1rem auto',
              fontSize: { xs: '20px', md: '30px', lg: '40px' },
              lineHeight: '92.5%',
              fontWeight: '400',
              height: '44px',
            }}
          >
            {t('header_text_one')}
            <Typography
              component={'span'}
              sx={{
                fontSize: { xs: '20px', md: '30px', lg: '40px' },
                borderRadius: '7px',
                background: 'linear-gradient(270deg, #0090EC 0%, #31E716 100%)',
                height: '44px',
                marginX: '.3rem',
                paddingY: '-.1rem',
              }}
            >
              {t('header_text_two')}
            </Typography>

            {t('header_text_three')}
          </Typography>
        </Box>
        <ModalVideo />
      </Box>
    </>
  )
}

export default Header
