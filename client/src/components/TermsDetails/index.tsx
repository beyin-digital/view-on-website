import { Box, Container, Typography } from '@mui/material'
import Content from './Content'
import { useTranslation } from 'next-i18next'

const TermsDetails = () => {
  const { t } = useTranslation('terms')

  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          height: '100vh',
          width: '100%',
          maxWidth: '100%',
          minHeight: '100%',
          background: "url('/images/swirl.webp')",
          backgroundPositionY: '-1500px',
          backgroundPositionX: { xs: '-700px', sm: '-520px', md: '-250px' },
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Box
        sx={{
          height: '40vh',
        }}
      />
      <Box
        sx={{
          height: '100%',
          width: '100%',
          position: 'relative',
          zIndex: '9',
          paddingX: '1rem',
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            minHeight: '100vh',
            height: '100%',
            marginTop: '2rem',
            marginBottom: '5rem',
          }}
        >
          <Box
            sx={{
              marginY: '5rem',
            }}
          >
            <Typography
              sx={{
                fontSize: '40px',
                fontWeight: '600',
              }}
            >
              {t('meta_title')}
            </Typography>
          </Box>
          <Box>
            <Content />
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default TermsDetails
