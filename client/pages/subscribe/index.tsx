import type { NextPage } from 'next'
import Head from 'next/head'
import useDebounce from '@/hooks/useDebounce'
import { isValidUrl } from '@/utils/checkUrl'
import { toast } from 'react-toastify'
import { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import {
  Typography,
  Box,
  OutlinedInput,
  FormControl,
  Button,
  Grid,
  CircularProgress,
} from '@mui/material'
import Link from 'next/link'
// translate hook
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { KeywordContext } from '@/contexts/keywordContext'

// icons
import { BsHash } from 'react-icons/bs'
import {
  FiArrowUpRight,
  FiArrowDownRight,
  FiArrowDownLeft,
  FiArrowUpLeft,
} from 'react-icons/fi'

import dynamic from 'next/dynamic'
import Header from '@/components/Subscribe/Header'

import {
  PackageBoxOne,
  PackageBoxThree,
  PackageBoxTwo,
} from '@/components/Subscribe/Package'
import { UserContext } from '@/contexts/userContext'
// components
const Layout = dynamic(() => import('@/components/Layout/LayoutSubscribe'), {
  ssr: false,
})
const Checks = dynamic(() => import('@/components/Subscribe/Checks'), {
  ssr: false,
})
const IconScroll = dynamic(() => import('@/components/Subscribe/IconScroll'), {
  ssr: false,
})
const Footer = dynamic(() => import('@/components/Footer/Footer'), {
  ssr: false,
})
const FooterMobile = dynamic(() => import('@/components/Footer/FooterMobile'), {
  ssr: false,
})

const SubscribePage: NextPage = () => {
  const { t } = useTranslation('subscribe')
  const router = useRouter()
  const { locale } = useRouter()
  const [isInputValid, setIsInputValid] = useState(true)
  const [values, setValues] = useState({
    hashtag: (router.query.hashtag as string)
      ? (router.query.hashtag as string)
      : '',
    sublink: (router.query.sublink as string)
      ? (router.query.sublink as string)
      : '',
  })

  const allowedCharacters = /^[^\s]+$/

  const hashtagDebounce = useDebounce(values.hashtag, 200)
  const { handleSubscription, handleCheckKeyword, keywordFound, isSearching } =
    useContext(KeywordContext)
  const { token } = useContext(UserContext)

  let price = ''
  let priceNumber = 0
  switch (values.hashtag.length) {
    case 1:
      price = '1m'
      priceNumber = 999995.35
      break
    case 2:
      price = '100k'
      priceNumber = 100000
      break
    case 3:
      price = '10k'
      priceNumber = 10000
      break
    default:
      price = ''
      break
  }
  // animation
  const [hoveredButton, setHoveredButton] = useState(false)
  const handleHoverButton = () => {
    setHoveredButton(!hoveredButton)
  }

  const handleLeave = () => {
    setHoveredButton(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value

    setValues({ ...values, [e.target.name]: e.target.value.trim() })
    setIsInputValid(allowedCharacters.test(inputValue))
    setShowAngledArrow(false)
  }
  const [showAngledArrow, setShowAngledArrow] = useState(false)
  // »arrow down
  const [showArrow, setShowArrow] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    if (hashtagDebounce || hashtagDebounce === '') {
      handleCheckKeyword(hashtagDebounce)
    }

    if (hashtagDebounce === '') {
      setShowAngledArrow(false)
    }
    if (!keywordFound && hashtagDebounce !== '') {
      setShowAngledArrow(true)
    } else {
      setShowAngledArrow(false)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [hashtagDebounce, keywordFound])

  return (
    <>
      <Head>
        <title>{`${t('meta_title')} | Keyword #${values.hashtag}`}</title>
        <meta name="description" content={`${t('meta_description')}`} />
        <meta name="keyword" content={`${t('meta_keyword')}`} />
        <link rel="canonical" href="https://website-vow.vercel.app/en/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Box
        sx={{
          maxWidth: '100%',
          overflow: 'hidden',
          position: 'relative',
          height:
            values.hashtag.length >= 4 ? '100%' : { xs: '100%', md: '100vh' },
        }}
      >
        <Layout>
          <Grid
            sx={{
              paddingX: {
                xs: '.5rem',
                sm: '1rem',
                md: '2rem',
                xl: '2rem',
              },
              height: '100%',
              transform: {
                xs: 'skew(0deg, 0deg)',
                sm: 'skew(16deg, 0deg)',
              },

              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-end' },
            }}
            className="SubscribePageLayout"
          >
            <>
              <Box
                sx={{
                  width: { xs: '90%', sm: '80%', md: '70%' },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: {
                    xs: 'center',
                    xl: 'space-evenly',
                  },
                  marginX: { xs: '1px', md: '5rem' },
                }}
              >
                {/* Text Head Box */}
                <Header />
                <Box
                  sx={{
                    marginY: {
                      xs: '.5rem',
                      sm: '2rem',
                      md: '1rem',
                      xl: '1rem',
                    },
                  }}
                >
                  <FormControl
                    sx={{
                      width: {
                        xs: '100%',
                        md: '90%',
                        xl: '90%',
                      },
                    }}
                  >
                    <OutlinedInput
                      inputProps={{
                        minLength: 1,
                        maxLength: 13,
                        pattern: allowedCharacters.test(values.hashtag),
                      }}
                      name="hashtag"
                      sx={{
                        width: '100%',
                        height: {
                          xs: '63px',
                          md: '80px',
                          xl: '80px',
                        },
                        fontSize: {
                          xs: '18px',
                          sm: '22px',
                          md: '28px',
                          xl: '32px',
                        },
                        lineHeight: '28px',
                        background: '#FBFBFB',
                        borderRadius: '20px',
                        border: '1px solid #E3E3E3',
                        '.MuiOutlinedInput-notchedOutline': {
                          border: '0',
                          padding: '9px',
                        },
                        '&:hover > .MuiOutlinedInput-notchedOutline': {
                          border: '0',
                        },
                        '& input::placeholder': {
                          fontSize: { xs: '18px', md: '22px', xl: '26px' },
                        },
                      }}
                      // className="borderSubscribeInput"
                      value={values.hashtag}
                      placeholder={`${t('input_hashtag_one')}`}
                      startAdornment={<BsHash color="#31E716" size={90} />}
                      endAdornment={
                        isSearching ? (
                          <CircularProgress
                            sx={{ color: '#343132' }}
                            size={40}
                          />
                        ) : locale === 'ar' ? (
                          showAngledArrow && (
                            <FiArrowUpLeft color="#343132" size={90} />
                          )
                        ) : (
                          showAngledArrow && (
                            <FiArrowUpRight color="#343132" size={90} />
                          )
                        )
                      }
                      className={`${!isInputValid ? 'inputError' : ''} ${
                        (values.hashtag.length === 1 ||
                          values.hashtag.length === 2 ||
                          values.hashtag.length === 3) &&
                        !keywordFound
                          ? 'borderSubscribeInput'
                          : ''
                      }`}
                      onChange={handleChange}
                    />
                    {!isInputValid && values.hashtag.length > 1 && (
                      <Typography sx={{ color: 'red' }}>
                        {t('error')}
                      </Typography>
                    )}
                    <Box
                      width="100%"
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: '13px',
                            sm: '20px',
                            md: '22px',
                            xl: '28px',
                          },
                        }}
                      />

                      <Box
                        sx={{
                          width: {
                            xs: '28%',
                            md: '25%',
                            xl: '22%',
                          },
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: {
                            xs: 'column',
                            md: 'row',
                            xl: 'row',
                          },
                          height: '60px',
                        }}
                      >
                        {allowedCharacters.test(values.hashtag) &&
                        !keywordFound &&
                        !isSearching &&
                        values.hashtag.length >= 1 ? (
                          <Typography
                            sx={{
                              cursor: 'pointer',
                              color: '#000',
                              backgroundClip: 'text',
                              WebkitBackgroundClip: 'text',
                              fontSize: {
                                xs: '18px',
                                md: '24px',
                                xl: '28px',
                              },
                              alignItems: 'center',
                              display: 'flex',
                              paddingX: '.6rem',
                            }}
                          >
                            {!keywordFound && t('available')}
                          </Typography>
                        ) : allowedCharacters.test(values.hashtag) &&
                          keywordFound &&
                          !isSearching &&
                          values.hashtag.length >= 1 ? (
                          <Typography
                            sx={{
                              cursor: 'pointer',
                              color: '#000',
                              backgroundClip: 'text',
                              WebkitBackgroundClip: 'text',
                              fontSize: {
                                xs: '18px',
                                md: '24px',
                                xl: '28px',
                              },
                              alignItems: 'center',
                              display: 'flex',
                              paddingX: '.6rem',
                            }}
                          >
                            {keywordFound && t('not_available')}
                          </Typography>
                        ) : null}

                        {allowedCharacters.test(values.hashtag) &&
                        !keywordFound &&
                        !isSearching &&
                        (values.hashtag.length >= 1 ||
                          values.hashtag.length <= 3) ? (
                          <Typography
                            onClick={() =>
                              router.push(`${router.asPath}/premium`)
                            }
                            sx={{
                              cursor: 'pointer',
                              display:
                                values.hashtag.length <= 3 &&
                                values.hashtag.length >= 1
                                  ? 'flex'
                                  : 'none',

                              color: '#000',
                              fontSize: {
                                xs: '18px',
                                md: '24px',
                                xl: '28px',
                              },
                              alignItems: 'center',
                              paddingX: '.6rem',
                            }}
                          >
                            {t('text_premium')}
                          </Typography>
                        ) : null}
                      </Box>
                    </Box>
                  </FormControl>
                </Box>
                <Box>
                  <Box
                    sx={{
                      width: {
                        xs: '100%',
                        md: '90%',
                        xl: '90%',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: '15px',
                          sm: '20px',
                          md: '25px',
                          xl: '40px',
                        },
                        marginY: {
                          xs: '1rem',
                          xl: '1rem',
                        },
                      }}
                    >
                      {t('text_input_sublink')}
                    </Typography>
                    <OutlinedInput
                      name="sublink"
                      value={values.sublink}
                      sx={{
                        width: '100%',
                        fontSize: {
                          xs: '18px',
                          sm: '22px',
                          md: '28px',
                          xl: '32px',
                        },
                        lineHeight: '28px',
                        height: {
                          xs: '63px',
                          md: '80px',
                          xl: '80px',
                        },
                        borderRadius: '20px',
                        background: '#FBFBFB',
                        paddingX: '10px',
                        boxShadow: '0px 31px 51px rgba(0, 0, 0, 0.05)',
                        '.MuiOutlinedInput-notchedOutline': {
                          border: '0',
                        },
                        '&:hover > .MuiOutlinedInput-notchedOutline': {
                          border: '0',
                        },
                        '& input::placeholder': {
                          fontSize: { xs: '18px', md: '22px', xl: '26px' },
                        },
                      }}
                      placeholder={`${t('input_hashtag_two')}`}
                      onChange={(e) =>
                        setValues({ ...values, sublink: e.target.value })
                      }
                    />
                  </Box>
                </Box>
                <Box>
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: {
                        xs: 'column',
                        md: 'column',
                        xl: 'row',
                      },
                      alignItems: 'center',
                      transition: '1 ease',
                      height: { xs: '', md: '190px', xl: '140px' },
                      marginY: { xs: '1rem', md: '.8rem', xl: '.2rem' },
                    }}
                  >
                    <>
                      <Box
                        sx={{
                          height: {
                            xs: '100%',
                            md: '100%',
                            xl: '100px',
                          },
                          width: {
                            xs: '100%',
                            md: '80%',
                            xl: '90%',
                          },
                          marginY: '.2rem',
                          display: 'flex',
                          justifyContent: {
                            xs: '',
                            md: 'space-around',
                            xl: 'space-around',
                          },
                          alignItems: 'center',
                          flexDirection: {
                            xs: 'column',
                            md: 'row',
                            xl: 'row',
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: {
                              xs: '100%',
                              md: '40%',
                              xl: '30%',
                            },
                            display: 'flex',
                            height: '100%',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginY: '1rem',
                          }}
                        >
                          <Box
                            sx={{
                              width: {
                                xs: '100%',
                                md: '100%',
                                xl: '70%',
                              },
                              height: '100%',
                              display:
                                !keywordFound &&
                                !isSearching &&
                                values.hashtag.length >= 1 &&
                                values.hashtag.length <= 3 &&
                                allowedCharacters.test(values.hashtag)
                                  ? 'flex'
                                  : 'none',
                              alignItems: 'center',
                              justifyContent: 'space-evenly',
                              flexDirection: 'column',
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: {
                                  xs: '20px',
                                  sm: '40px',
                                  md: '40px',
                                  xl: '40px',
                                },
                                lineHeight: '37px',
                                fontWeight: '400',
                                color: '#343132',
                                textTransform: 'uppercase',
                              }}
                            >
                              ${price}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: {
                                  xs: '14px',
                                  sm: '16px',
                                  md: '16px',
                                  xl: '16px',
                                },
                                lineHeight: '14px',
                                fontWeight: '400',
                                color: '#343132',
                                textTransform: 'capitalize',
                                marginY: '.6rem',
                                display:
                                  !keywordFound &&
                                  !isSearching &&
                                  (values.hashtag.length === 1 ||
                                    values.hashtag.length === 2 ||
                                    values.hashtag.length === 3)
                                    ? 'block'
                                    : 'none',
                              }}
                            >
                              {t('cash_one')}
                            </Typography>
                          </Box>
                        </Box>
                        {/* Check  */}
                        {!keywordFound &&
                          !isSearching &&
                          values.hashtag.length < 4 &&
                          allowedCharacters.test(values.hashtag) && (
                            <Box
                              sx={{
                                width: {
                                  xs: '100%',
                                  md: '60%',
                                  xl: '40%',
                                },
                                height: '100%',
                                display:
                                  values.hashtag.length === 1 ||
                                  values.hashtag.length === 2 ||
                                  values.hashtag.length === 3
                                    ? 'flex'
                                    : 'none',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Checks />
                            </Box>
                          )}
                      </Box>
                    </>

                    {/* Button Reserve Or Pay  !!  */}

                    {/* Button Pay  */}

                    {values.hashtag.length <= 3 &&
                    !keywordFound &&
                    !isSearching ? (
                      <>
                        {values.hashtag.length >= 1 &&
                          allowedCharacters.test(values.hashtag) && (
                            <>
                              <Button
                                disabled={keywordFound}
                                sx={{
                                  borderRadius: '16px',
                                  paddingX: '18px',
                                  height: '59px',
                                  width: {
                                    xs: '100%',
                                    sm: '311px',
                                    md: '311px',
                                    xl: '311px',
                                  },
                                  display: 'flex',
                                  background: '#0090EC',
                                  justifyContent: 'space-around',
                                }}
                                onClick={async () => {
                                  if (values.sublink.length < 4) {
                                    toast.error('Add your sublink to proceed')
                                    return
                                  }
                                  if (
                                    values.sublink.length > 4 &&
                                    !isValidUrl(values.sublink)
                                  ) {
                                    toast.error('Please enter a valid Sublink')
                                    return
                                  }
                                  if (keywordFound) {
                                    toast.error(
                                      'This hashtag is already in use'
                                    )
                                    return
                                  }
                                  if (token) {
                                    await handleSubscription(
                                      values.hashtag,
                                      values.sublink
                                    )
                                    return
                                  } else {
                                    router.push(
                                      '/login?redirect=subscribe&hashtag=' +
                                        values.hashtag +
                                        '&sublink=' +
                                        values.sublink
                                    )
                                  }
                                }}
                                type="submit"
                                className="ButtonPay"
                                onMouseEnter={handleHoverButton}
                                onMouseLeave={handleLeave}
                              >
                                <Typography
                                  sx={{
                                    letterSpacing: '0.02em',
                                    fontSize: '32px',
                                    fontWeight: '400',
                                    lineHeight: '40px',
                                    color: '#343132',
                                    textTransform: 'uppercase',
                                  }}
                                >
                                  {`${token ? t('pay') : t('button')}`}
                                  {/* {t("pay")} */}
                                </Typography>
                                {locale === 'ar' ? (
                                  <FiArrowDownLeft
                                    size={42}
                                    color="#343132"
                                    className={
                                      hoveredButton ? 'ButtonReserve_rtl' : ''
                                    }
                                  />
                                ) : (
                                  <FiArrowDownRight
                                    size={42}
                                    color="#343132"
                                    className={
                                      hoveredButton ? 'ButtonReserve_ltr' : ''
                                    }
                                  />
                                )}
                              </Button>
                            </>
                          )}
                      </>
                    ) : (
                      <Box
                        sx={{
                          width: '100%',
                        }}
                      >
                        {values.hashtag.length > 3 &&
                          allowedCharacters.test(values.hashtag) && (
                            <Box
                              sx={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexDirection: {
                                  xs: 'column-reverse',
                                  sm: 'row',
                                },
                              }}
                            >
                              {/* Icon Scroll */}
                              <Box
                                sx={{
                                  width: '100%',
                                  display:
                                    values.hashtag.length >= 4 &&
                                    values.sublink.length > 0 &&
                                    isValidUrl(values.sublink) &&
                                    !keywordFound &&
                                    allowedCharacters.test(values.hashtag)
                                      ? 'flex'
                                      : 'none',
                                  alignItems: 'center',
                                  justifyContent: 'start',
                                }}
                              >
                                <IconScroll />
                              </Box>
                            </Box>
                          )}
                      </Box>
                    )}
                  </Box>
                  {/* text under line  */}
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '18px',
                        fontWeight: '400',
                        color: '#343132',
                      }}
                    >
                      {t('text_line')}
                      <Link
                        href="/terms"
                        style={{
                          textDecoration: 'underline',
                          color: '#343132',
                          marginRight: '.2rem',
                          marginLeft: '.2rem',
                        }}
                        title={`${t('text_line_link')}`}
                      >
                        {t('text_line_link')}
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </>
          </Grid>
        </Layout>

        {/* package box */}
        <Box
          sx={{
            width: '100%',
            height: { xs: '100%', xl: '100vh' },
            display:
              values.hashtag.length >= 4 &&
              values.sublink.length > 0 &&
              isValidUrl(values.sublink) &&
              !keywordFound &&
              allowedCharacters.test(values.hashtag)
                ? 'flex'
                : 'none',

            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', xl: '80%' },
              height: { xs: '100%', xl: '560px' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              flexDirection: {
                xs: 'column',
                md: 'row',
                xl: 'row',
              },
            }}
          >
            {/* Package one */}
            <PackageBoxOne
              onClick={async () => {
                if (!token) {
                  router.push(
                    '/login?redirect=subscribe&hashtag=' +
                      values.hashtag +
                      '&sublink=' +
                      values.sublink
                  )
                  return
                } else {
                  if (
                    values.hashtag.length >= 4 &&
                    values.sublink.length > 0 &&
                    isValidUrl(values.sublink)
                  ) {
                    await handleSubscription(
                      values.hashtag as string,
                      values.sublink as string,
                      'month'
                    )
                  }
                }
              }}
              // name="pay"
              name={`${token ? t('pay') : t('button')}`}
            />
            {/* Package two */}
            <PackageBoxTwo
              onClick={async () => {
                if (!token) {
                  router.push(
                    '/login?redirect=subscribe&hashtag=' +
                      values.hashtag +
                      '&sublink=' +
                      values.sublink
                  )
                  return
                } else {
                  if (
                    values.hashtag.length >= 4 &&
                    values.sublink.length > 0 &&
                    isValidUrl(values.sublink)
                  ) {
                    await handleSubscription(
                      values.hashtag as string,
                      values.sublink as string,
                      'year'
                    )
                  }
                }
              }}
              name={`${token ? t('pay') : t('button')}`}
            />
            {/* Package three */}
            <PackageBoxThree
              onClick={async () => {
                if (!token) {
                  router.push(
                    '/login?redirect=subscribe&hashtag=' +
                      values.hashtag +
                      '&sublink=' +
                      values.sublink
                  )
                  return
                } else {
                  if (
                    values.hashtag.length >= 4 &&
                    values.sublink.length > 0 &&
                    isValidUrl(values.sublink)
                  ) {
                    await handleSubscription(
                      values.hashtag as string,
                      values.sublink as string,
                      '6-months'
                    )
                  }
                }
              }}
              name={`${token ? t('pay') : t('button')}`}
            />
          </Box>
        </Box>
        <Footer />
        <FooterMobile />
      </Box>
    </>
  )
}

export async function getStaticProps({ params, locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', ['common', 'subscribe'])),
    },
  }
}
export default SubscribePage
