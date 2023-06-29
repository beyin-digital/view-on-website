import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const LoginTextSignUp = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  return (
    <>
      <Box>
        <Typography
          sx={{
            fontSize: { xs: '18px', xl: '22px' },
            fontWeight: '300',
            lineHeight: '14px',
            marginY: '1rem',
            textAlign: 'center',
          }}
        >
          {t('account')}
          <Link
            // href={`/signup${
            //   router.query.redirect === 'subscribe' &&
            //   `?redirect=subscribe&hashtag=${router.query.hashtag}&sublink=${router.query.sublink}`
            // }`}
            href={`/signup${
              router.query.redirect === 'subscribe'
                ? `?redirect=subscribe&hashtag=${router.query.hashtag}&sublink=${router.query.sublink}`
                : ''
            }`}
            style={{
              textDecoration: 'none',
              color: '#0090EC',
            }}
            title="View On Website SignUp"
          >
            {t('create_account')}
          </Link>
        </Typography>
      </Box>
    </>
  )
}

export default LoginTextSignUp
