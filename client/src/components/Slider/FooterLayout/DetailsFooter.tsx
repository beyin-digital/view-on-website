import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import { Box, Button, Typography } from '@mui/material'
import { FiArrowDownRight, FiArrowDownLeft } from 'react-icons/fi'
import RightSide from './RightSide'
import { useState, useContext, useEffect } from 'react'
import { UserContext } from '@/contexts/userContext'
import { KeywordContext } from '@/contexts/keywordContext'

const DetailsFooter = () => {
  // translate hook
  const { t } = useTranslation('slider')
  const { locale, push } = useRouter()

  const router = useRouter()
  const { token } = useContext(UserContext)
  const { swiperSelectedtedKeyword } = useContext(KeywordContext)

  // animation
  const [hoveredButton, setHoveredButton] = useState(false)
  const handleHoverButton = () => {
    setHoveredButton(!hoveredButton)
  }

  const handleLeave = () => {
    setHoveredButton(false)
  }

  return (
    <>
      {locale === 'ar' ? (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: { xs: 'column-reverse', md: 'row-reverse' },
            justifyContent: 'center',
            marginTop: { xs: '3rem', sm: '0', xl: '0' },
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', md: '80%', xl: '60%' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row-reverse',
                md: 'row-reverse',
                xl: 'row-reverse',
              },
              marginY: { xs: '2rem', md: '.5rem', xl: '.5rem' },
              border: {
                xs: '1px solid #FBFBFB',
                md: 'transparent',
                xl: 'transparent',
              },
              background: {
                xs: '#FBFBFB',
                md: 'transparent',
                xl: 'transparent',
              },
              borderRadius: '24px',
              paddingY: '1rem',
            }}
          >
            <RightSide />
          </Box>
          <Box
            sx={{
              width: { xs: '100%', md: '30%', xl: '30%' },
              display: 'flex',
              alignItems: 'end',
              justifyContent: { xs: 'center', md: '', xl: '' },
              marginY: { sm: '2rem' },
              zIndex: '9999999999',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: {
                  xs: 'center',
                  md: 'end',
                  xl: 'end',
                },
              }}
            >
              {token ? (
                <Button
                  onClick={() =>
                    router.push(
                      `${router.locale}/subscribe?keyword=${swiperSelectedtedKeyword}`
                    )
                  }
                  sx={{
                    borderRadius: '16px',
                    paddingX: '18px',
                    height: '59px',
                    width: '311px',
                    display: 'flex',

                    justifyContent: 'space-around',
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                  }}
                  onMouseEnter={handleHoverButton}
                  onMouseLeave={handleLeave}
                  className="ButtonReserve"
                >
                  <Typography
                    sx={{
                      letterSpacing: '0.02em',
                      fontSize: '32px',
                      fontWeight: 400,
                      lineHeight: '40px',
                      color: '#343132',
                    }}
                  >
                    {t('pay')}
                  </Typography>
                  <FiArrowDownLeft
                    size={42}
                    color="#343132"
                    className={hoveredButton ? 'ButtonReserve_rtl' : ''}
                  />
                </Button>
              ) : (
                <Button
                  onClick={() => router.push('/login')}
                  sx={{
                    borderRadius: '16px',
                    paddingX: '18px',
                    height: '59px',
                    width: '311px',
                    display: 'flex',

                    justifyContent: 'space-around',
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                  }}
                  onMouseEnter={handleHoverButton}
                  onMouseLeave={handleLeave}
                  className="ButtonReserve"
                >
                  <Typography
                    sx={{
                      letterSpacing: '0.02em',
                      fontSize: '32px',
                      fontWeight: 400,
                      lineHeight: '40px',
                      color: '#343132',
                    }}
                  >
                    {t('button')}
                  </Typography>
                  <FiArrowDownLeft
                    size={42}
                    color="#343132"
                    className={hoveredButton ? 'ButtonReserve_rtl' : ''}
                  />
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            justifyContent: 'center',
            marginTop: { xs: '3rem', sm: '0', xl: '0' },
            zIndex: '9999999999',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', md: '80%', xl: '60%' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
                md: 'row',
                xl: 'row-reverse',
              },
              border: {
                xs: '1px solid #FBFBFB',
                md: 'transparent',
                xl: 'transparent',
              },
              background: {
                xs: 'rgba(251, 251, 251, 0.6)',
                md: 'transparent',
                xl: 'transparent',
              },
              borderRadius: '24px',
              backdropFilter: { xs: 'blur(100px)', md: 'blur(0px)' },
              paddingY: '1rem',
            }}
          >
            <RightSide />
          </Box>

          <Box
            sx={{
              width: { xs: '100%', md: '30%', xl: '30%' },
              display: 'flex',
              alignItems: 'end',
              justifyContent: { xs: 'center', md: '', xl: '' },
              marginY: { sm: '2rem' },
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: {
                  xs: 'center',
                  md: 'end',
                  xl: 'end',
                },
              }}
            >
              {token ? (
                <Button
                  onClick={() =>
                    router.push(
                      `${locale}/subscribe?keyword=${swiperSelectedtedKeyword}}`
                    )
                  }
                  sx={{
                    borderRadius: '16px',
                    paddingX: '18px',
                    height: '59px',
                    width: '311px',
                    display: 'flex',
                  }}
                  onMouseEnter={handleHoverButton}
                  onMouseLeave={handleLeave}
                  className="ButtonReserve"
                >
                  <Typography
                    sx={{
                      letterSpacing: '0.02em',
                      fontSize: '32px',
                      fontWeight: 400,
                      lineHeight: '40px',
                      color: '#343132',
                    }}
                  >
                    {t('pay')}
                  </Typography>
                  <FiArrowDownRight
                    size={42}
                    color="#343132"
                    className={hoveredButton ? 'ButtonReserve_ltr' : ''}
                  />
                </Button>
              ) : (
                <Button
                  onClick={() => router.push(`/${locale}/login`)}
                  sx={{
                    borderRadius: '16px',
                    paddingX: '18px',
                    height: '59px',
                    width: '311px',
                    display: 'flex',
                  }}
                  onMouseEnter={handleHoverButton}
                  onMouseLeave={handleLeave}
                  className="ButtonReserve"
                >
                  <Typography
                    sx={{
                      letterSpacing: '0.02em',
                      fontSize: '32px',
                      fontWeight: 400,
                      lineHeight: '40px',
                      color: '#343132',
                    }}
                  >
                    {`${token ? t('pay') : t('button')}`}
                  </Typography>
                  <FiArrowDownRight
                    size={42}
                    color="#343132"
                    className={hoveredButton ? 'ButtonReserve_ltr' : ''}
                  />
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </>
  )
}

export default DetailsFooter
