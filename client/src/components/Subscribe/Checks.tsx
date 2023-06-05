import { Box, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { AiOutlineCheck } from 'react-icons/ai'

const Checks = () => {
  const { t } = useTranslation('subscribe')

  const checks = [
    { id: 1, title: 'Easy to Read from Distance', tKey: 'checks_one' },
    { id: 2, title: 'Continuous Analytical Reports', tKey: 'checks_two' },
    { id: 3, title: 'Profile Chart Dashboard', tKey: 'checks_three' },
    { id: 4, title: 'SEO Supported Keyword', tKey: 'checks_four' },
  ]
  return (
    <>
      <>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          {checks.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: {
                  xs: '25px',
                  xl: '45px',
                },
              }}
            >
              <AiOutlineCheck fontSize="small" color="#455154" />
              <Box
                sx={{
                  width: '100%',
                  paddingX: '.5rem',
                  paddingY: '.2rem',
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: '14px',
                      sm: '16px',
                      md: '16px',
                      xl: '16px',
                    },
                    fontWeight: '400',
                    lineHeight: '14px',
                    color: '#343132',
                    textTransform: 'capitalize',
                  }}
                >
                  {t(item.tKey)}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </>
    </>
  )
}

export default Checks
