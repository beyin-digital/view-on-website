import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

const LoginDetails = () => {
  const { t } = useTranslation('login')

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '3.5rem',
          marginBottom: '.5rem',
        }}
      >
        <Image
          src="/images/logo.svg"
          title="Logo View On Website"
          alt="Logo View On Website"
          width={150}
          height={80}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginY: { xs: '1rem', md: '.5rem', xl: '1rem' },
        }}
      >
        <Typography
          fontWeight="100"
          sx={{
            fontSize: { xs: '24px', md: '30px', xl: '40px' },
            fontWeight: '400',
            lineHeight: '37px',
          }}
          component={'h1'}
        >
          {t('title')}
        </Typography>
      </Box>
    </>
  )
}

export default LoginDetails
