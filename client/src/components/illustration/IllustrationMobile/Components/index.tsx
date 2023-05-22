import { Box, Typography, Grid, Link } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import NextLink from 'next/link'
export const ImageHeader = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: { xs: 'none', sm: 'block' },
        }}
      >
        <Image
          fill
          src="/images/swirl.svg"
          alt=""
          style={{
            top: '-63rem',
            position: 'absolute',
          }}
        />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: { xs: 'block', sm: 'none' },
        }}
      >
        <Image
          fill
          src="/images/swirl.svg"
          alt=""
          style={{
            top: '-57rem',
            position: 'absolute',
          }}
        />
      </Box>
    </>
  )
}
export const HeaderLayout = () => {
  const { t } = useTranslation('illustration')
  const { locale } = useRouter()
  return (
    <>
      <Box
        sx={{
          height: { xs: '100%', md: '280px' },
          display: 'flex',
          justifyContent: 'space-between',
          position: 'relative',
          marginTop: { xs: '3rem', sm: '1rem', md: '1rem' },
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          paddingX: { xs: '1rem', sm: '1.5rem', md: '3rem' },
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: { xs: 'auto', sm: '400px', md: '280px' },
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              width: { xs: '100%' },
              marginBottom: '1rem',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '30px', md: '50px', xl: '64px' },
                fontWeight: '600',
                lineHeight: {
                  xs: '35px',
                  sm: '45px',
                  md: '45px',
                  xl: '45px',
                },
              }}
            >
              {t('title')}
            </Typography>
          </Box>
          <Box
            sx={{
              height: '50px',
              width: { xs: '70%', sm: '85%' },
              background: ' linear-gradient(270deg, #0090EC 0%, #31E716 100%)',
              borderRadius: '7px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '25px', sm: '30px' },
                fontWeight: '600',
                lineHeight: '37px',
                color: '#FBFBFB',
              }}
            >
              ViewOnWebsite.com
            </Typography>
          </Box>
          <Box
            sx={{
              height: '33px',
              width: '100%',

              paddingY: '10px',
            }}
          >
            <Typography
              sx={{
                fontSize: '24px',
                fontWeight: '',
                lineHeight: '22px',
              }}
            >
              {t('desc_one')}{' '}
            </Typography>
          </Box>
          <Box
            sx={{
              marginY: { xs: '2rem' },
            }}
          >
            <Typography
              sx={{
                fontSize: { md: '20px', xl: '24px' },
                lineHeight: '22px',
                fontWeight: '500',
                position: 'relative',
                zIndex: '99',
                marginTop: { xs: '3rem' },
                background: 'transparent',
              }}
            >
              {t('desc_two')}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: { xs: 'center', md: 'center' },
                justifyContent: 'center',
                height: { xs: '100px', sm: '100px', md: '200px' },
              }}
            >
              <img src="/icons/arrowDown.png" />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: '90%',
            height: { xs: '120px', sm: '150px', md: '330px' },
            display: 'flex',
            justifyContent: { xs: 'start', md: 'center' },
            flexDirection: 'column',
            position: 'relative',
            marginY: { xs: '.2rem', sm: '2rem' },
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              // paddingTop: "1rem",
              display: 'flex',
              width: { xs: '100%', sm: '80%' },
              justifyContent: 'center',
              // paddingX: "3rem",
            }}
          >
            {locale === 'ar' ? (
              <img
                src="/images/illustrationPicCenterAR.png"
                style={{
                  width: '100%',
                }}
              />
            ) : (
              <img
                src="/images/illustrationPicCenter.png"
                style={{
                  width: '100%',
                }}
              />
            )}
          </Box>
        </Box>
      </Box>
    </>
  )
}
export const MainContainer = () => {
  const { t } = useTranslation('illustration')

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: { xs: '500px', sm: '500px' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          marginY: { xs: '6rem', sm: '5rem' },
          padding: { xs: '1rem', sm: '2rem' },
        }}
        className="MainBoxPic"
      >
        <Box
          sx={{
            width: { xs: '95%', sm: '90%' },
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              width: { xs: '80%', sm: '50%' },
              display: 'flex',
              alignItems: { xs: 'center', md: 'start' },
              position: 'relative',
            }}
            className="arrowDownLeft"
          >
            <img src="/icons/arrowDownLeft.png" />
          </Box>

          <Box
            sx={{
              position: 'absolute',
              top: { xs: '0rem', sm: '7rem' },
            }}
            className="swirlSmall"
          >
            <img src="/images/swirlSmall.svg" />
          </Box>
          <Box
            sx={{
              width: { xs: '100%', sm: '70%' },
              position: 'relative',
              zIndex: '999',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <img
              src="/images/illustrationPicMobile.png"
              style={{
                width: '100%',
                objectFit: 'cover',
              }}
            />
            <Typography
              sx={{
                fontSize: { md: '24px', xl: '24px' },
                lineHeight: '22px',
                fontWeight: '400',
                position: 'relative',
                zIndex: '9999999999',
                background: 'transparent',
                width: '262px',
                height: '100px',
              }}
            >
              {t('desc_three')}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export const ThreeOption = () => {
  const { t } = useTranslation('illustration')
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: '', md: 'space-around' },
          flexDirection: 'column',
        }}
      >
        <Grid
          justifyContent="space-between"
          alignItems="center"
          container
          sx={{
            flexDirection: { xs: '', md: 'row' },
          }}
        >
          <Grid
            item
            md={3}
            sx={
              {
                // marginLeft: "1rem",
              }
            }
            sm={12}
            className="optionOne"
          >
            <Box
              sx={{
                height: '60px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: '35px',
                      lineHeight: '60px',
                      marginRight: '.5rem',
                    }}
                  >
                    01
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: '17px',
                        sm: '20px',
                        md: '20px',
                        xl: '20px',
                      },
                      lineHeight: '20px',
                      fontWeight: '400',
                    }}
                  >
                    {t('text_one')}
                    <span
                      style={{
                        fontWeight: '600',
                        margin: 'auto 2px',
                      }}
                    >
                      #{t('text_one_bold')}
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            md={4}
            sx={{
              height: '80px',
            }}
            sm={12}
            className="optionTwo"
          >
            <Box
              sx={{
                height: '60px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: '35px',
                      lineHeight: '60px',
                      marginRight: '.5rem',
                    }}
                  >
                    02
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: '17px',
                        sm: '20px',
                        md: '20px',
                        xl: '20px',
                      },
                      lineHeight: '20px',
                      fontWeight: '400',
                    }}
                  >
                    {t('text_two')}
                    <span
                      style={{
                        fontWeight: '600',
                        margin: 'auto 2px',
                      }}
                    >
                      {t('text_two_bold')}
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            md={4}
            sx={{
              // marginLeft: "2rem",
              height: '80px',
            }}
            className="optionThree"
            sm={12}
          >
            <Box
              sx={{
                height: '60px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: '35px',
                      lineHeight: '60px',
                      marginRight: '.5rem',
                    }}
                  >
                    03
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: '17px',
                        sm: '20px',
                        md: '20px',
                        xl: '20px',
                      },
                      lineHeight: '20px',
                      fontWeight: '400',
                    }}
                  >
                    {t('text_three')}
                    <span
                      style={{
                        fontWeight: '600',
                        margin: 'auto 2px',
                      }}
                    >
                      {t('text_three_bold')}
                    </span>
                    {t('text_three_text')}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export const ButtonStyle = () => {
  const { t } = useTranslation('illustration')
  const { locale } = useRouter()
  const router = useRouter()
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alginItems: 'center',
          justifyContent: 'center',
          height: '60px',
          width: '90%',
          marginX: '1rem',
          paddingX: '1rem',
          cursor: 'pointer',
        }}
      >
        <Box
          sx={{
            width: '277px',
            height: { xs: '50px', sm: '46px', md: '46px', xl: '46px' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingX: '1rem',
            background: '#31E716',
            borderRadius: '12px',
          }}
        >
          <NextLink
            href="/example"
            locale={router.locale}
            title="Example View On Website Page"
            style={{
              textDecoration: 'none',
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: '17px',
                  sm: '20px',
                  md: '20px',
                  xl: '20px',
                },
                fontWeight: '700',
                lineHeight: {
                  xs: '25px',
                  sm: '39px',
                  md: '39px',
                  xl: '39px',
                },
                color: '#343132',
                textTransform: 'uppercase',
              }}
            >
              {t('button')}
            </Typography>
          </NextLink>
          {locale === 'ar' ? (
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.4205 0.691288L21.4906 3.76137L8.30463 16.9473L37.7467 16.9474L37.7467 21.2762L8.30463 21.2762L21.4906 34.4621L18.4205 37.5322L7.11275e-05 19.1117L18.4205 0.691288Z"
                fill="#343132"
              />
            </svg>
          ) : (
            <svg
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5335 0.0334638L11.4665 2.10039L20.344 10.9778L0.522155 10.9778L0.522154 13.8922L20.344 13.8922L11.4665 22.7697L13.5335 24.8366L25.935 12.435L13.5335 0.0334638Z"
                fill="#343132"
              />
            </svg>
          )}
        </Box>
      </Box>
    </>
  )
}
