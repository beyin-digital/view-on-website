import { Box, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

const TextPremium = ({ onClick }: any) => {
  // Translation hook
  const { t } = useTranslation('common')

  return (
    <>
      <Box
        sx={{
          width: '100%',
          position: 'absolute',
          top: { xs: '4.2rem', md: '.2rem' },
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          heigh: '80px',
          transform: 'skew(0deg, 0deg)',
        }}
      >
        <Box
          sx={{
            width: '200px',
            height: '60px',
            lineHeight: '92.5%',
            background: 'linear-gradient(270deg, #0090EC 0%, #31E716 100%)',
            borderRadius: '11px',
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            cursor: 'pointer',
            paddingBottom: '1rem',
            paddingTop: '.2rem',
          }}
          onClick={onClick}
        >
          <Typography
            sx={{
              fontSize: { xs: '25px', xl: '32px' },
              fontWeight: '500',
              lineHeight: '29px',
              background: '',
            }}
          >
            {t('home')}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default TextPremium
