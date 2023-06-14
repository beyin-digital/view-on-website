import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { Box, Typography } from '@mui/material'

interface SecondComponentProps {
  selectedImage: string
}
const HeaderLayout: React.FC<SecondComponentProps> = ({ selectedImage }) => {
  // Translation hook
  const { t } = useTranslation('slider')

  // Router hook
  const { locale } = useRouter()

  return (
    <>
      <Box
        sx={{
          width: '100%',
        }}
      >
        {/* Conditionally render based on locale */}

        {locale === 'ar' ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: { xs: '100%', md: '100px', xl: '100px' },
              width: '100%',
              flexDirection: {
                xs: 'column-reverse',
                md: 'row-reverse',
                xl: 'row-reverse',
              },
              marginTop: { xs: '1rem', md: '0', xl: '1rem' },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: '25px', md: '30px', xl: '40px' },
                  fontWeight: '400',
                  lineHeight: '45px',
                }}
              >
                {t('title')}
                <Typography
                  component={'span'}
                  sx={{
                    paddingX: '4px',
                    margin: 'auto 5px',
                    background:
                      'linear-gradient(270deg, #0090EC 0%, #31E716 100%)',
                    borderRadius: '7px',
                    fontSize: { xs: '25px', md: '30px', xl: '40px' },
                    fontWeight: '400',
                    lineHeight: '45px',
                  }}
                >
                  {t('text_keyword')}
                </Typography>
                {t('prime')}
              </Typography>
            </Box>
            <Box
              sx={{
                position: 'relative',
                width: '200px',
                height: '50px',
              }}
            ></Box>
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              height: { xs: '100%', md: '100px', xl: '100px' },
              flexDirection: { xs: 'column', md: 'row', xl: 'row' },
              marginTop: { xs: '1rem', md: '0', xl: '0' },
              marginBottom: { xs: '0rem', md: '0', xl: '0rem' },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: '25px', md: '30px', xl: '40px' },
                  fontWeight: '400',
                  lineHeight: { xs: '20px', md: '45px' },
                  marginY: { xs: '.5rem', md: '0' },
                }}
              >
                {t('title')}
                <Typography
                  component={'span'}
                  sx={{
                    paddingX: '4px',
                    margin: 'auto 4px',
                    background:
                      'linear-gradient(270deg, #0090EC 0%, #31E716 100%)',
                    borderRadius: '7px',
                    fontSize: { xs: '25px', md: '30px', xl: '40px' },
                    fontWeight: '400',
                    lineHeight: '40px',
                  }}
                >
                  {t('text_keyword')}
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{
                position: 'relative',
                width: '200px',
                height: '50px',
              }}
            ></Box>
          </Box>
        )}
      </Box>
    </>
  )
}

export default HeaderLayout
