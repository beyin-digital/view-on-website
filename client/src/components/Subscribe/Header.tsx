import { Box, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

const Header = () => {
  const { t } = useTranslation('subscribe')
  return (
    <>
      <Box
        sx={{
          marginY: {
            xs: '2rem',
            md: '1rem',
            xl: '0rem',
          },
          marginX: {
            xs: '.5rem',
            md: '1rem',
            xl: '1rem',
          },
        }}
      >
        <Typography
          component={'h1'}
          sx={{
            fontSize: {
              xs: '18px',
              sm: '20px',
              md: '25px',
              xl: '40px',
            },
            lineHeight: '25px',
          }}
        >
          {t('text_one')}
          <Typography
            component={'span'}
            sx={{
              fontSize: {
                xs: '18px',
                sm: '20px',
                md: '25px',
                xl: '40px',
              },

              paddingX: '2px',
              marginX: '.2rem',
              borderRadius: '8px',
              lineHeight: '92.5%',
              background: 'linear-gradient(270deg, #0090EC 0%, #31E716 100%)',
            }}
          >
            #{t('text_keyword')}
          </Typography>{' '}
          {t('text_two')}
        </Typography>
      </Box>
    </>
  )
}

export default Header
