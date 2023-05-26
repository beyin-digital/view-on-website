import type { NextPage } from 'next'
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

import Image from 'next/image'

// translate hook
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

// icons
import { BsHash } from 'react-icons/bs'
import {
  FiArrowUpRight,
  FiArrowDownRight,
  FiArrowDownLeft,
  FiArrowUpLeft,
} from 'react-icons/fi'
import { AiOutlineCheck } from 'react-icons/ai'

// components
import Layout from '@/components/Layout/LayoutSubscribe'

import { KeywordContext } from '@/contexts/keywordContext'
import Footer from '@/components/Footer/Footer'
import FooterMobile from '@/components/Footer/FooterMobile'

import Head from 'next/head'
import useDebounce from '@/hooks/useDebounce'
import { isValidUrl } from '@/utils/checkUrl'
import { toast } from 'react-toastify'

const SubscribePage: NextPage = () => {
  const { t } = useTranslation('subscribe')
  const router = useRouter()
  const { locale } = useRouter()

  const descCardOne = [
    { id: 1, desc: 'Triple Hashtag Keyword', tKey: 'box_one_one' },
    { id: 2, desc: 'Triple Hashtag Keyword', tKey: 'box_one_two' },
    { id: 3, desc: 'Triple Hashtag Keyword', tKey: 'box_one_three' },
  ]
  const descCardTwo = [
    { id: 11, desc: 'Triple Hashtag Keyword', tKey: 'box_two_one' },
    { id: 22, desc: 'Triple Hashtag Keyword', tKey: 'box_two_two' },
    { id: 23, desc: 'Triple Hashtag Keyword', tKey: 'box_two_three' },
    // { id: 244, desc: "Triple Hashtag Keyword", tKey: "box_two_four" },
  ]
  const descCardThree = [
    { id: 111, desc: 'Triple Hashtag Keyword', tKey: 'box_three_one' },
    { id: 222, desc: 'Triple Hashtag Keyword', tKey: 'box_three_two' },
    { id: 233, desc: 'Triple Hashtag Keyword', tKey: 'box_three_three' },
  ]

  const checks = [
    { id: 1, title: 'Easy to Read from Distance', tKey: 'checks_one' },
    { id: 2, title: 'Continuous Analytical Reports', tKey: 'checks_two' },
    { id: 3, title: 'Profile Chart Dashboard', tKey: 'checks_three' },
    { id: 4, title: 'SEO Supported Keyword', tKey: 'checks_four' },
  ]

  const [values, setValues] = useState({
    hashtag: '',
    sublink: '',
  })

  const hashtagDebounce = useDebounce(values.hashtag, 1000)
  const {
    handleSubscription,
    checkKeywordavailability,
    keywordFound,
    isSearching,
  } = useContext(KeywordContext)
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
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  // »arrow down
  const [showArrow, setShowArrow] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    if (hashtagDebounce) {
      checkKeywordavailability(hashtagDebounce)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [hashtagDebounce, keywordFound])

  console.log('keywordFound', keywordFound)
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
          width: '2162px',
          maxWidth: '100%',
          overflow: 'hidden',
          position: 'relative',
          height:
            values.hashtag.length >= 4 ? '100%' : { xs: '100%', md: '100vh' },
        }}
      >
        <Layout
          nameOne={t('illustration')}
          linkOne="/illustration"
          nameTwo={t('subscribe')}
          linkTwo="/subscribe"
          nameThree={t('nav_examples')}
          linkThree="/example"
          nameFour={t('nav_login')}
          linkFour="/login"
        >
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
                <Box
                  sx={{
                    marginY: {
                      xs: '2rem',
                      md: '1rem',
                      xl: '0rem',
                    },
                    marginX: {
                      xs: '.5rem',
                      md: '1rem',
                      xl: '1rem',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: '18px',
                        sm: '20px',
                        md: '25px',
                        xl: '40px',
                      },
                      lineHeight: '92.5%',
                    }}
                  >
                    {t('text_one')}
                    <Typography
                      component={'span'}
                      sx={{
                        fontSize: {
                          xs: '18px',
                          sm: '20px',
                          md: '25px',
                          xl: '40px',
                        },

                        paddingX: '2px',
                        marginX: '.2rem',
                        borderRadius: '8px',
                        lineHeight: '92.5%',
                        background:
                          'linear-gradient(270deg, #0090EC 0%, #31E716 100%)',
                      }}
                    >
                      #{t('text_keyword')}
                    </Typography>{' '}
                    {/* before someone else does */}
                    {t('text_two')}
                  </Typography>
                </Box>
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
                            size={60}
                          />
                        ) : locale === 'ar' ? (
                          <FiArrowUpLeft color="#343132" size={90} />
                        ) : (
                          <FiArrowUpRight color="#343132" size={90} />
                        )
                      }
                      className={`${
                        (values.hashtag.length === 1 ||
                          values.hashtag.length === 2 ||
                          values.hashtag.length === 3) &&
                        !keywordFound
                          ? 'borderSubscribeInput'
                          : ''
                      }`}
                      onChange={handleChange}
                    />

                    <Box
                      width="100%"
                      display="flex"
                      justifyContent="space-between"
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
                      >
                        {/* The hashtag keyword you've chosen is premium */}
                        {/* {t("text_hashtag")} */}
                      </Typography>
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
                        }}
                      >
                        {values.hashtag.length >= 1 && !keywordFound && (
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
                            {t('available')}
                          </Typography>
                        )}

                        {(values.hashtag.length === 1 ||
                          values.hashtag.length === 2 ||
                          values.hashtag.length === 3) &&
                          !keywordFound && (
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

                                backgroundImage:
                                  'linear-gradient(270deg, #0090EC 0%, #31E716 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                fontSize: {
                                  xs: '18px',
                                  md: '24px',
                                  xl: '28px',
                                },
                                alignItems: 'center',
                                // display: "flex",
                                paddingX: '.6rem',
                              }}
                            >
                              {t('text_premium')}
                            </Typography>
                          )}
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
                      // label={`${t("input_hashtag_two")}`}
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
                      onChange={handleChange}
                    />
                  </Box>
                </Box>
                <Box>
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: {
                        xs: '2rem',
                        xl: '1rem',
                      },
                      flexDirection: {
                        xs: 'column',
                        md: 'column',
                        xl: 'row',
                      },
                      alignItems: 'center',
                    }}
                  >
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
                        marginY: '.8rem',
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
                            display: 'flex',
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
                            {price}
                          </Typography>
                          {values.hashtag.length < 4 && (
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
                              }}
                            >
                              {t('cash_one')}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                      {values.hashtag.length < 4 && (
                        <Box
                          sx={{
                            width: {
                              xs: '100%',
                              md: '60%',
                              xl: '40%',
                            },
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
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
                                <AiOutlineCheck
                                  fontSize="small"
                                  color="#455154"
                                />
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
                        </Box>
                      )}
                    </Box>
                    {/* Button Reserve Or Pay || Button Inder Code !!  */}

                    {/* Button Reserve Or Pay  !!  */}
                    {values.hashtag.length > 3 && (
                      <>
                        <Button
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
                            background: '#31E716',
                            justifyContent: 'space-around',
                          }}
                          onClick={() => {}}
                          type="submit"
                          className="ButtonReserve"
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
                              textTransform: 'capitalize',
                            }}
                          >
                            {t('button')}
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
                        {values.hashtag.length >= 4 && showArrow && (
                          <Box
                            sx={{
                              position: 'fixed',
                              bottom: {
                                xs: '-5rem',
                                sm: '-0rem',
                                md: '-5.5rem',
                                xl: '-5.4rem',
                              },
                              right: { xs: '0%', md: '10%', xl: '50%' },
                              transform: 'translateX(-50%)',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              zIndex: '9999999999999',
                            }}
                          >
                            <>
                              <Typography
                                fontSize={'15px'}
                                fontWeight={'400'}
                                lineHeight={'18px'}
                                color="#343132"
                                marginBottom="15px"
                              >
                                Scroll down
                              </Typography>
                              <>
                                <>
                                  <svg
                                    className="animated-svg EffectMouse"
                                    width="22"
                                    height="40"
                                    viewBox="0 0 22 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M13.201 30.3905H8.89441C5.02885 30.3905 1.86719 27.2289 1.86719 23.3641V8.51863C1.86719 4.65385 5.02963 1.49219 8.89441 1.49219H13.2002C17.0657 1.49219 20.2274 4.65385 20.2274 8.51863V23.3641C20.2274 27.2289 17.0657 30.3905 13.201 30.3905Z"
                                      stroke="#343132"
                                      stroke-width="2"
                                      stroke-miterlimit="10"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M10.9817 13.011H11.1124V13.0126C11.9804 13.0126 12.6913 12.3017 12.6913 11.4337V6.73123C12.6913 5.86245 11.9804 5.15234 11.1124 5.15234H10.9817C10.1137 5.15234 9.40284 5.86245 9.40284 6.73045V11.4321C9.40387 11.8506 9.57055 12.2516 9.86642 12.5474C10.1623 12.8433 10.5633 13.01 10.9817 13.011Z"
                                      fill="#343132"
                                    />
                                    <path
                                      d="M15.146 34.6807L11.0891 38.7376M6.99951 34.6807L11.0564 38.7376M11.1124 13.011H10.9817C10.5633 13.01 10.1623 12.8433 9.86642 12.5474C9.57055 12.2516 9.40387 11.8506 9.40284 11.4321V6.73045C9.40284 5.86245 10.1137 5.15234 10.9817 5.15234H11.1124C11.9804 5.15234 12.6913 5.86245 12.6913 6.73123V11.4337C12.6913 12.3017 11.9804 13.0126 11.1124 13.0126V13.011Z"
                                      stroke="#343132"
                                      stroke-width="2"
                                      stroke-miterlimit="10"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </>
                              </>
                            </>
                          </Box>
                        )}
                      </>
                    )}
                    {values.hashtag.length < 4 && (
                      <>
                        <Button
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
                          onClick={() => {
                            if (
                              values.hashtag.length > 3 &&
                              values.sublink.length === 0 &&
                              !isValidUrl(values.sublink)
                            ) {
                              alert('Please enter a valid hashtag')
                              return
                            }
                            if (keywordFound) {
                              toast.error('This hashtag is already in use')
                            }
                            console.log('values', values)
                            handleSubscription(values.hashtag, values.sublink)
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
                            {t('pay')}
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
            // display: "flex",
            display: values.hashtag.length >= 4 ? 'flex' : 'none',
            // height: values.hashtag.length >= 4 ? "100%" : "100%",
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
            <Box
              sx={{
                width: {
                  xs: '90%',
                  sm: '314px',
                  md: '314px',
                  xl: '350px',
                },
                height: '467',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'column',
                border: '1px solid #FBFBFB',
                borderRadius: '24px',
                background: 'rgba(251, 251, 251, 0.6)',
                backdropFilter: 'blur(100px)',
                marginY: '1rem',
              }}
            >
              {/* card Header */}
              <Box
                sx={{
                  height: '70px',
                  width: '100%',
                  borderBottom: '1px solid #FBFBFB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '24px', xl: '28px' },
                    fontWeight: '600',
                    color: '#58696D',
                  }}
                >
                  {t('box_one_title')}
                </Typography>
              </Box>
              {/* card price */}
              <Box
                sx={{
                  height: '60px',
                  marginY: '1rem',
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: '33px',
                      md: '40px',
                      xl: '51px',
                    },
                    fontWeight: '600',
                    color: '#31E716',
                  }}
                >
                  $99
                </Typography>
              </Box>
              {/* card body */}
              <Box
                sx={{
                  width: '100%',
                  height: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                {descCardOne.map((item) => (
                  <Box
                    key={item.id}
                    sx={{
                      width: '90%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginY: '.3rem',
                    }}
                  >
                    <Image
                      src="/icons/check.svg"
                      alt=""
                      width={30}
                      height={30}
                    />
                    <Typography
                      sx={{
                        fontSize: {
                          xs: '15px',
                          md: '18px',
                          xl: '20px',
                        },
                        fontWeight: '400',
                        marginX: {
                          xs: '.1rem',
                          md: '1rem',
                        },
                        width: '90%',
                      }}
                    >
                      {t(item.tKey)}
                    </Typography>
                  </Box>
                ))}
              </Box>
              {/* card button */}
              <Box
                sx={{
                  height: '100px',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* <ButtonStyle /> */}
                <Box
                  sx={{
                    width: '200px',
                    display: 'flex',
                    justifyContent: 'end',
                    // background: "#0090EC",
                    borderRadius: '11px',
                  }}
                  className="ButtonPayCard"
                  onMouseEnter={handleHoverButton}
                  onMouseLeave={handleLeave}
                >
                  <Button
                    onClick={async () => {
                      handleSubscription(
                        values.hashtag as string,
                        values.sublink as string,
                        'month',
                        99
                      )
                    }}
                    sx={{
                      paddingX: '18px',
                      width: '150px',
                      height: '45px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginRight: '8px',
                    }}
                  >
                    <Typography
                      sx={{
                        // fontFamily: "Helvetica Neue",
                        letterSpacing: '0.02em',
                        fontSize: '32px',
                        fontWeight: 400,
                        lineHeight: '40px',
                        color: '#FBFBFB',
                        textTransform: 'uppercase',
                      }}
                    >
                      {t('pay')}
                    </Typography>

                    {locale === 'ar' ? (
                      <FiArrowUpLeft
                        size={42}
                        color="#FBFBFB"
                        className={hoveredButton ? 'animated-icon_rtl' : ''}
                      />
                    ) : (
                      <FiArrowUpRight
                        size={42}
                        color="#FBFBFB"
                        className={hoveredButton ? 'animated-icon' : ''}
                      />
                    )}
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                width: {
                  xs: '90%',
                  sm: '372px',
                  md: '372px',
                  xl: '400px',
                },
                height: '551px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'column',
                border: '1px solid #FBFBFB',
                borderRadius: '28px',
                background:
                  'radial-gradient(163.29% 99.69% at 90.76% 58.8%, rgba(0, 144, 236, 0.1) 0%, rgba(0, 145, 237, 0) 100%)',
                // " linear-gradient(270deg, rgba(0, 144, 236, 0.1) 0%, rgba(49, 231, 22, 0.1) 100%)",
                backdropFilter: 'blur(117px)',
                boxShadow: '0px 72px 86px rgba(0, 0, 0, 0.07)',
                marginY: '1rem',
                marginX: '1rem',
                paddingX: '.2rem',
              }}
            >
              {/* card Header */}
              <Box
                sx={{
                  height: '70px',
                  width: '100%',
                  borderBottom: '1px solid #FBFBFB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '24px', xl: '28px' },
                    fontWeight: '600',
                    color: '#58696D',
                  }}
                >
                  {t('box_two_title')}
                </Typography>
              </Box>
              {/* card price */}
              <Box
                sx={{
                  height: '60px',
                  marginY: '1rem',
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: '33px',
                      md: '40px',
                      xl: '51px',
                    },
                    fontWeight: '600',
                    color: '#31E716',
                  }}
                >
                  $399
                </Typography>
              </Box>
              {/* card body */}
              <Box
                sx={{
                  width: '100%',
                  height: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                {descCardTwo.map((item) => (
                  <Box
                    key={item.id}
                    sx={{
                      width: '90%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginY: '.3rem',
                    }}
                  >
                    <Image
                      src="/icons/check.svg"
                      alt=""
                      width={30}
                      height={30}
                    />
                    <Typography
                      sx={{
                        fontSize: {
                          xs: '15px',
                          md: '18px',
                          xl: '20px',
                        },
                        fontWeight: '400',
                        marginX: {
                          xs: '.1rem',
                          md: '1rem',
                        },
                        width: '90%',
                      }}
                    >
                      {t(item.tKey)}
                    </Typography>
                  </Box>
                ))}
              </Box>
              {/* card button */}
              <Box
                sx={{
                  height: '100px',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* <ButtonStyle /> */}
                <Box
                  sx={{
                    width: '200px',
                    display: 'flex',
                    justifyContent: 'end',
                    background: '#0090EC',
                    borderRadius: '11px',
                  }}
                  className="ButtonPayCard"
                  onMouseEnter={handleHoverButton}
                  onMouseLeave={handleLeave}
                >
                  <Button
                    onClick={() => {
                      handleSubscription(
                        values.hashtag as string,
                        values.sublink as string,
                        'year',
                        399
                      )
                    }}
                    sx={{
                      paddingX: '18px',
                      width: '150px',
                      height: '45px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginRight: '7px',
                    }}
                  >
                    <Typography
                      sx={{
                        // fontFamily: "Helvetica Neue",
                        letterSpacing: '0.02em',
                        fontSize: '32px',
                        fontWeight: 400,
                        lineHeight: '40px',
                        color: '#FBFBFB',
                        textTransform: 'uppercase',
                      }}
                    >
                      {t('pay')}
                    </Typography>

                    {locale === 'ar' ? (
                      <FiArrowUpLeft
                        size={42}
                        color="#FBFBFB"
                        className={hoveredButton ? 'animated-icon_rtl' : ''}
                      />
                    ) : (
                      <FiArrowUpRight
                        size={42}
                        color="#FBFBFB"
                        className={hoveredButton ? 'animated-icon' : ''}
                      />
                    )}
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                width: {
                  xs: '90%',
                  sm: '314px',
                  md: '314px',
                  xl: '350px',
                },
                height: '467',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'column',
                border: '1px solid #FBFBFB',
                borderRadius: '24px',
                background: 'rgba(251, 251, 251, 0.6)',
                backdropFilter: 'blur(100px)',
                marginY: '1rem',
              }}
            >
              {/* card Header */}
              <Box
                sx={{
                  height: '70px',
                  width: '100%',
                  borderBottom: '1px solid #FBFBFB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '24px', xl: '28px' },
                    fontWeight: '600',
                    color: '#58696D',
                  }}
                >
                  {t('box_three_title')}
                </Typography>
              </Box>
              {/* card price */}
              <Box
                sx={{
                  height: '60px',
                  marginY: '1rem',
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: '33px',
                      md: '40px',
                      xl: '51px',
                    },
                    fontWeight: '600',
                    color: '#31E716',
                  }}
                >
                  $299
                </Typography>
              </Box>
              {/* card body */}
              <Box
                sx={{
                  width: '100%',
                  height: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                }}
              >
                {descCardThree.map((item) => (
                  <Box
                    key={item.id}
                    sx={{
                      width: '90%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginY: '.3rem',
                    }}
                  >
                    <Image
                      src="/icons/check.svg"
                      alt=""
                      width={30}
                      height={30}
                    />
                    <Typography
                      sx={{
                        fontSize: {
                          xs: '15px',
                          md: '18px',
                          xl: '20px',
                        },
                        fontWeight: '400',
                        marginX: {
                          xs: '.1rem',
                          md: '1rem',
                        },
                        width: '90%',
                      }}
                    >
                      {t(item.tKey)}
                    </Typography>
                  </Box>
                ))}
              </Box>
              {/* card button */}
              <Box
                sx={{
                  height: '100px',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* <ButtonStyle /> */}
                <Box
                  sx={{
                    width: '200px',
                    display: 'flex',
                    justifyContent: 'end',
                    background: '#0090EC',
                    borderRadius: '11px',
                  }}
                  className="ButtonPayCard"
                  onMouseEnter={handleHoverButton}
                  onMouseLeave={handleLeave}
                >
                  <Button
                    onClick={() => {
                      handleSubscription(
                        values.hashtag as string,
                        values.sublink as string,
                        'month',
                        299
                      )
                    }}
                    sx={{
                      paddingX: '18px',
                      width: '150px',
                      height: '45px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginRight: '7px',
                    }}
                  >
                    <Typography
                      sx={{
                        // fontFamily: "Helvetica Neue",
                        letterSpacing: '0.02em',
                        fontSize: '32px',
                        fontWeight: 400,
                        lineHeight: '40px',
                        color: '#FBFBFB',
                        textTransform: 'uppercase',
                      }}
                    >
                      {t('pay')}
                    </Typography>
                    {locale === 'ar' ? (
                      <FiArrowUpLeft
                        size={42}
                        color="#FBFBFB"
                        className={hoveredButton ? 'animated-icon_rtl' : ''}
                      />
                    ) : (
                      <FiArrowUpRight
                        size={42}
                        color="#FBFBFB"
                        className={hoveredButton ? 'animated-icon' : ''}
                      />
                    )}{' '}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Footer />
        <FooterMobile />
      </Box>
    </>
  )
}
// export async function getServerSideProps({}: any) {
//   return {
//     paths: [{ params: { tag: 'a', sublinks: 'ww' } }],
//     fallback: true,
//   }
// }

export async function getStaticProps({ params, locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', ['common', 'subscribe'])),
    },
  }
}
export default SubscribePage
