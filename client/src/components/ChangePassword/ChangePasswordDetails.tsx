// translate hooks
import { useTranslation } from 'next-i18next'

import { Box, Typography } from '@mui/material'
import Image from 'next/image'

const ChangePasswordDetails = () => {
  const { t } = useTranslation('changePassword')

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginY: '1rem',
        }}
      >
        <Image
          src="/images/logo.svg"
          alt="Logo View On Website"
          title="Logo View On Website"
          width={150}
          height={80}
          placeholder="blur"
          blurDataURL="/images/logo.svg"
        />
        <Typography
          sx={{
            fontSize: { xs: '20px', xl: '24px' },
            fontWeight: '800',
            lineHeight: '28px',
            marginY: '.5rem',
            textAlign: 'center',
          }}
          color="#343132"
        ></Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '20px', md: '30px', xl: '40px' },
            fontWeight: '400',
            lineHeight: { xs: '22px', xl: '37px' },
            marginBottom: { xs: '2rem', md: '', xl: '1rem' },
            textAlign: 'center',
          }}
        >
          {t('title')}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '18px', xl: '24px' },
            fontWeight: '400',
            lineHeight: '27px',
            textAlign: 'center',
            marginBottom: { xs: '2rem', md: '', xl: '1rem' },
            color: '#A0A9AB',
          }}
        >
          {t('desc')}
        </Typography>
      </Box>
    </>
  )
}

export default ChangePasswordDetails
