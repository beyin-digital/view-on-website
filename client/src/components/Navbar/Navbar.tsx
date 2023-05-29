import { useContext, useState } from 'react'
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from '@mui/material'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MenuIcon from '@mui/icons-material/Menu'
import { FiArrowUpRight, FiArrowUpLeft } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import Image from 'next/image'
import { UserContext } from '@/contexts/userContext'

const Header = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname, query, asPath, locale, push } = router
  const [hoveredButton, setHoveredButton] = useState(false)

  const { token } = useContext(UserContext)
  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleHoverButton = () => {
    setHoveredButton(!hoveredButton)
  }

  const handleLeave = () => {
    setHoveredButton(false)
  }
  const links = [
    {
      tKey: 'nav_subscribe',
      label: 'Subscribe',
      href: '/subscribe',
    },
    {
      tKey: 'nav_examples',
      label: 'Examples',
      href: '/example',
    },
    {
      tKey: 'ar',
      label: 'AR',
      href: '/ar',
      sublinks: '/ar/1',
    },
    {
      tKey: 'nav_login',
      label: 'Login',
      href: '/login',
    },
  ]
  const link = [
    {
      tKey: 'footer_contact',
      label: 'Contact',
      href: '/contact',
    },
    {
      tKey: 'footer_learn',
      label: 'Learn More',
      href: '/',
    },
    {
      tKey: 'footer_privacy',
      label: 'Privacy Policy',
      href: '/privacy',
    },
    {
      tKey: 'footer_terms',
      label: 'T&C',
      href: '/terms',
    },
  ]

  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginX: '1rem',
        }}
      >
        <Box sx={{ cursor: 'pointer', margin: '.5rem 0', textAlign: 'center' }}>
          <Link href="/" title="logo View On Website">
            <img
              src="/images/logo.svg"
              alt="logo View On Website"
              title="logo View On Website"
              loading="lazy"
            />
          </Link>
        </Box>
        <AiOutlineClose size="25px" />
      </Box>

      <Box
        sx={{
          marginY: '2rem',
        }}
      >
        <Link
          title={`${t('nav_subscribe')}`}
          href="/subscribe"
          style={{
            textDecoration: 'none',
          }}
        >
          <Box
            sx={{
              marginX: '1rem',
              height: '55px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              fontSize="24px"
              fontWeight={'400'}
              lineHeight="37px"
              color="#343132"
              textTransform={'capitalize'}
            >
              {t('nav_subscribe')}
            </Typography>
            <IoIosArrowForward color="#343132" />
          </Box>
        </Link>
        <Link
          title={`${t('nav_examples')}`}
          href="/example"
          style={{
            textDecoration: 'none',
          }}
        >
          <Box
            sx={{
              marginX: '1rem',
              height: '55px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              fontSize="24px"
              fontWeight={'400'}
              lineHeight="37px"
              color="#343132"
              textTransform={'capitalize'}
            >
              {t('nav_examples')}
            </Typography>
            <IoIosArrowForward color="#343132" />
          </Box>
        </Link>

        {!token && (
          <Link
            title={`${t('nav_login')}`}
            href="/login"
            style={{
              textDecoration: 'none',
            }}
          >
            <Box
              sx={{
                marginX: '1rem',
                height: '55px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                fontSize="24px"
                fontWeight={'400'}
                lineHeight="37px"
                color="#343132"
                textTransform={'capitalize'}
              >
                {t('nav_login')}
              </Typography>
              <IoIosArrowForward color="#343132" />
            </Box>
          </Link>
        )}
        <Link
          href={asPath}
          locale={locale === 'en' ? 'ar' : 'en'}
          style={{
            textDecoration: 'none',
          }}
          title="Lang EN"
        >
          <Box
            sx={{
              marginX: '1rem',
              height: '55px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              fontSize="24px"
              fontWeight={'400'}
              lineHeight="37px"
              color="#343132"
              textTransform={'capitalize'}
            >
              {locale === 'en' ? 'AR' : 'EN'}
            </Typography>
            <IoIosArrowForward color="#343132" />
          </Box>
        </Link>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {locale === 'ar' ? (
          <Button
            onClick={() => {
              if (token) {
                router.push(`/${locale}/dashboard`)
              }
              router.push('/illustration')
            }}
            sx={{
              borderRadius: '16px',
              paddingX: '11px',
              height: '59px',
              display: 'flex',
              width: '313px',
              flexDirection: 'row-reverse',
            }}
            onMouseEnter={handleHoverButton}
            onMouseLeave={handleLeave}
            className="ButtonAnimation"
          >
            <Typography
              sx={{
                letterSpacing: '0.02em',
                fontSize: '25px',
                fontWeight: '700',
                lineHeight: '40px',
                color: '#343132',
                textTransform: 'uppercase',
              }}
            >
              {token ? t('nav_Dashboard') : t('nav_getStarted')}
            </Typography>

            <FiArrowUpLeft
              size={42}
              color="#343132"
              className={hoveredButton ? 'animated-icon_rtl' : ''}
            />
          </Button>
        ) : (
          <Button
            onClick={() => {
              if (token) {
                router.push(`/${locale}/dashboard`)
              }
              router.push('/illustration')
            }}
            sx={{
              borderRadius: '16px',
              paddingX: '11px',
              height: '59px',
              display: 'flex',
              width: '313px',

              background: 'linear-gradient(270deg, #0090EC 0%, #31E716 100%)',
            }}
            onMouseEnter={handleHoverButton}
            onMouseLeave={handleLeave}
            className="ButtonAnimation"
          >
            <Typography
              sx={{
                letterSpacing: '0.02em',
                fontSize: '25px',
                fontWeight: '700',
                lineHeight: '40px',
                color: '#343132',
                textTransform: 'uppercase',
              }}
            >
              {token ? t('nav_Dashboard') : t('nav_getStarted')}
            </Typography>

            <FiArrowUpRight
              size={42}
              color="#343132"
              className={hoveredButton ? 'animated-icon' : ''}
            />
          </Button>
        )}
      </Box>
      <Box
        sx={{
          marginY: '1rem',
        }}
      >
        <Divider light />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: { xs: 'flex', md: 'flex', xl: 'flex' },
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'start', xl: 'start' },
          margin: { xs: ' 2rem 0', xl: '0' },
        }}
      >
        <Image
          src="/icons/facebook.svg"
          alt="View On Website Icon Facebook"
          title="View On Website Icon Facebook"
          height={18}
          width={18}
          style={{
            margin: '0 .5rem',
          }}
        />
        <Image
          src="/icons/youtube.svg"
          alt="View On Website Icon Twitter"
          title="View On Website Icon Twitter"
          height={18}
          width={18}
          style={{
            margin: '0 .5rem',
          }}
        />
        <Image
          src="/icons/instagram.svg"
          alt="View On Website Icon Instagram "
          title="View On Website Icon Instagram "
          height={18}
          width={18}
          style={{
            margin: '0 .5rem',
          }}
        />
      </Box>
      <Box
        sx={{
          marginX: '1rem',
        }}
      >
        {link.map((link) => (
          <Link
            key={t(link.tKey)}
            title={`${t(link.tKey)}`}
            href={link.href}
            style={{
              textDecoration: 'none',
            }}
          >
            <Box
              sx={{
                height: '55px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                fontSize="18px"
                fontWeight={'400'}
                lineHeight="27px"
                color="#343132"
                textTransform={'capitalize'}
              >
                {t(link.tKey)}
              </Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  )
  return (
    <>
      <Box>
        <AppBar
          component={'nav'}
          sx={{
            background: 'rgba(251, 251, 251, 0.1)',
            backdropFilter: 'blur(100px)',
            border: '1px solid #FBFBFB',
            boxShadow: '0px 0px 0px 0px',
            zIndex: '999999999',
          }}
        >
          <Toolbar
            sx={{
              flexDirection: { xs: 'row-reverse', md: 'row', xl: 'row' },
              background: 'rgba(251, 251, 251, 0.6)',
              backdropFilter: 'blur(100px)',
              justifyContent: 'space-between',
              minHeight: '80px',
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { xl: 'none' },
                background: 'transparent',
              }}
              onClick={handleDrawerToggle}
              className="navbarIcon"
            >
              {mobileOpen ? (
                <AiOutlineClose color="#343132" size="25px" />
              ) : (
                <MenuIcon
                  sx={{
                    color: '#343132',
                  }}
                />
              )}
            </IconButton>
            <Box
              component="div"
              sx={{ cursor: 'pointer', margin: '.5rem 0' }}
              // onClick={() => router.push("/")}
            >
              <Link href="/" title="Home View On Website">
                <img
                  src="/images/logo.svg"
                  alt="logo View On Website"
                  title="logo View On Website"
                  loading="lazy"
                />
              </Link>
            </Box>

            <Box
              sx={{
                display: 'flex',
                background: 'transparent',
              }}
              className="navbarItems"
            >
              <Box
                sx={{
                  display: { xs: 'none', sm: 'none', md: 'flex', xl: 'flex' },
                  background: 'transparent',
                }}
              >
                <ul className="navigation-menu">
                  <li>
                    <Link
                      href="/subscribe"
                      title={`${t('nav_subscribe')}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        fontSize="32px"
                        fontWeight={400}
                        lineHeight="37px"
                        color="#343132"
                        textTransform={'capitalize'}
                      >
                        {t('nav_subscribe')}
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/example"
                      title={`${t('nav_examples')}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        fontSize="32px"
                        fontWeight={400}
                        lineHeight="37px"
                        color="#343132"
                        textTransform={'capitalize'}
                      >
                        {t('nav_examples')}
                      </Typography>
                    </Link>
                  </li>

                  {!token && (
                    <li>
                      <Link
                        href="/login"
                        title={`${t('nav_login')}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <Typography
                          fontSize="32px"
                          fontWeight={400}
                          lineHeight="37px"
                          color="#343132"
                          textTransform={'capitalize'}
                        >
                          {t('nav_login')}
                        </Typography>
                      </Link>
                    </li>
                  )}

                  <li>
                    <Link
                      href={asPath}
                      locale={locale === 'en' ? 'ar' : 'en'}
                      title=""
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        fontSize="32px"
                        fontWeight={400}
                        lineHeight="37px"
                        color="#343132"
                        textTransform={'capitalize'}
                      >
                        {locale === 'en' ? 'AR' : 'EN'}
                      </Typography>
                    </Link>
                  </li>
                </ul>
              </Box>
              <Button
                sx={{
                  borderRadius: '16px',
                  paddingX: '18px',
                  height: '59px',
                  width: { xs: '300px', xl: '311px' },
                  display: { xs: 'none', md: 'flex', xl: 'flex' },
                }}
                onMouseEnter={handleHoverButton}
                onMouseLeave={handleLeave}
                className="ButtonAnimation"
              >
                {token ? (
                  <Typography
                    onClick={() => router.push(`${locale}/dashboard`)}
                    sx={{
                      letterSpacing: '0.02em',
                      fontSize: { xs: '23px', xl: '32px' },
                      fontWeight: '700',
                      lineHeight: '40px',
                      color: '#343132',
                      textTransform: 'uppercase',
                    }}
                  >
                    {t('nav_Dashboard')}
                  </Typography>
                ) : (
                  <Typography
                    sx={{
                      letterSpacing: '0.02em',
                      fontSize: { xs: '23px', xl: '32px' },
                      fontWeight: '700',
                      lineHeight: '40px',
                      color: '#343132',
                      textTransform: 'uppercase',
                    }}
                    onClick={() => router.push('/illustration')}
                  >
                    {t('nav_getStarted')}
                  </Typography>
                )}
                {locale === 'ar' ? (
                  <FiArrowUpLeft
                    size={42}
                    color="#343132"
                    className={hoveredButton ? 'animated-icon_rtl' : ''}
                  />
                ) : (
                  <FiArrowUpRight
                    size={42}
                    color="#343132"
                    className={hoveredButton ? 'animated-icon' : ''}
                  />
                )}
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{
            background: 'rgba(251, 251, 251, 0.6)',
            backdropFilter: 'blur(100px)',
          }}
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            hideBackdrop={true}
            sx={{
              display: { xs: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: '100%',
                height: '100%',
                background: 'transparent',
                backdropFilter: 'blur(100px)',
                boxShadow: '0px 0px 0px 0px',
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  )
}

export default Header
