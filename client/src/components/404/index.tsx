import { Box, Link, Typography } from '@mui/material'
import { FiArrowUpLeft } from 'react-icons/fi'

// translate hook
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

// components
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../Layout/Layout'), {
  ssr: false,
})
const TextViewOnWeb = dynamic(() => import('@/components/Home/TextViewOnWeb'), {
  ssr: false,
})

const ErrorDetails = () => {
  // translate
  const { t } = useTranslation('error')
  const { locale } = useRouter()

  return (
    <>
      <Layout>
        <Box
          sx={{
            width: '100%',
            height: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'end' },
          }}
        >
          {/* translate Arabic */}
          {locale === 'ar' ? (
            <Box
              sx={{
                width: '70%',
                height: '60%',
                transform: 'skew(16deg, 0deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '30px', md: '45px' },
                  fontWeight: '600',
                  marginBottom: '2rem',
                }}
              >
                {t('title')}
              </Typography>
              <Link
                href="/"
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '20px', md: '35px' },
                    fontWeight: '600',
                    color: 'inherit',
                  }}
                >
                  {t('text')}
                </Typography>
                <FiArrowUpLeft size={42} color="#343132" />
              </Link>
              <TextViewOnWeb />
            </Box>
          ) : (
            <Box
              sx={{
                width: '70%',
                height: '60%',
                transform: 'skew(16deg, 0deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '30px', md: '45px' },
                  fontWeight: '600',
                  marginBottom: '2rem',
                }}
              >
                {t('title')}
              </Typography>
              <Link
                href="/"
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FiArrowUpLeft size={42} color="#343132" />
                {/* <FiArrowUpRight size={42} color="#343132" /> */}
                <Typography
                  sx={{
                    fontSize: { xs: '20px', md: '35px' },
                    fontWeight: '600',
                    color: 'inherit',
                  }}
                >
                  {t('text')}
                </Typography>
              </Link>
              <TextViewOnWeb />
            </Box>
          )}
        </Box>
      </Layout>
    </>
  )
}

export default ErrorDetails
