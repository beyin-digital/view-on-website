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
import { icons, links } from '../Layout/GLobal'
import FooterNav from './FooterNav'
import ModalNav from './ModalNav'
import { toast } from 'react-toastify'

const NavbarStatic = ({
  nameOne,
  linkOne,
  nameTwo,
  linkTwo,
  nameThree,
  linkThree,
  nameFour,
  linkFour,
}: any) => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname, query, asPath, locale } = router
  const [hoveredButton, setHoveredButton] = useState(false)

  const { user, token } = useContext(UserContext)
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
  // modal
  const [open, setOpen] = useState(false)
  function openModel() {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
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
          <Link href="/" title="logo View On Website Logo">
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
          title={nameOne}
          href={`${linkOne}`}
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
              {nameOne}
            </Typography>
            <IoIosArrowForward color="#343132" />
          </Box>
        </Link>
        <Link
          title={nameTwo}
          href={`${linkTwo}`}
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
              {nameTwo}
            </Typography>
            <IoIosArrowForward color="#343132" />
          </Box>
        </Link>
        {!token && (
          <>
            <Link
              title={nameThree}
              href={`${linkThree}`}
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
                  {nameThree}
                </Typography>
                <IoIosArrowForward color="#343132" />
              </Box>
            </Link>
            <Link
              title={nameFour}
              href={`${linkFour}`}
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
                  {nameFour}
                </Typography>
                <IoIosArrowForward color="#343132" />
              </Box>
            </Link>
          </>
        )}

        <Link
          href={asPath}
          locale={locale === 'en' ? 'ar' : 'en'}
          style={{
            textDecoration: 'none',
          }}
          title={`${locale === 'en' ? 'ar' : 'en'}`}
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
            sx={{
              borderRadius: '16px',
              paddingX: '18px',
              height: '59px',
              width: { xs: '300px', xl: '311px' },
              display: { xs: 'flex', xl: 'none' },
            }}
            onMouseEnter={handleHoverButton}
            onMouseLeave={handleLeave}
            className="ButtonAnimation"
          >
            <FiArrowUpLeft
              size={42}
              color="#343132"
              className={hoveredButton ? 'animated-icon_rtl' : ''}
            />

            {token ? (
              user?.hasKeywords ? (
                <Link
                  href={`${locale}/dashboard/`}
                  style={{
                    textDecoration: 'none',
                  }}
                  title={`${t('nav_Dashboard')}`}
                >
                  <Typography
                    sx={{
                      letterSpacing: '0.02em',
                      fontSize: { xs: '23px', lg: '32px' },
                      fontWeight: '700',
                      lineHeight: '40px',
                      color: '#343132',
                      textTransform: 'uppercase',
                    }}
                  >
                    {t('nav_Dashboard')}
                  </Typography>
                </Link>
              ) : (
                <Typography
                  onClick={() => toast.info(`${t('purchase_keyword')}`)}
                  sx={{
                    letterSpacing: '0.02em',
                    fontSize: { xs: '23px', lg: '32px' },
                    fontWeight: '700',
                    lineHeight: '40px',
                    color: '#343132',
                    textTransform: 'uppercase',
                  }}
                >
                  {t('nav_Dashboard')}
                </Typography>
              )
            ) : (
              <Link
                href="/illustration"
                style={{
                  textDecoration: 'none',
                }}
                title={`${t('nav_getStarted')}`}
              >
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
              </Link>
            )}
          </Button>
        ) : (
          <Button
            sx={{
              borderRadius: '16px',
              paddingX: '18px',
              height: '59px',
              width: { xs: '300px', xl: '311px' },
              display: { xs: 'flex', xl: 'none' },
            }}
            onMouseEnter={handleHoverButton}
            onMouseLeave={handleLeave}
            className="ButtonAnimation"
          >
            {token ? (
              user?.hasKeywords ? (
                <Link
                  href={`${locale}/dashboard/`}
                  style={{
                    textDecoration: 'none',
                  }}
                  title={`${t('nav_Dashboard')}`}
                >
                  <Typography
                    sx={{
                      letterSpacing: '0.02em',
                      fontSize: { xs: '23px', lg: '32px' },
                      fontWeight: '700',
                      lineHeight: '40px',
                      color: '#343132',
                      textTransform: 'uppercase',
                    }}
                  >
                    {t('nav_Dashboard')}
                  </Typography>
                </Link>
              ) : (
                <Typography
                  onClick={() => toast.info(`${t('purchase_keyword')}`)}
                  sx={{
                    letterSpacing: '0.02em',
                    fontSize: { xs: '23px', lg: '32px' },
                    fontWeight: '700',
                    lineHeight: '40px',
                    color: '#343132',
                    textTransform: 'uppercase',
                  }}
                >
                  {t('nav_Dashboard')}
                </Typography>
              )
            ) : (
              <Link
                href="/illustration"
                style={{
                  textDecoration: 'none',
                }}
                title={`${t('nav_getStarted')}`}
              >
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
              </Link>
            )}

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
        {icons.map((item) => (
          <Link
            href={item.link}
            title={item.alt}
            style={{
              textDecoration: 'none',
            }}
            key={item.id}
          >
            <Image
              src={item.icon}
              alt={item.alt}
              title={item.alt}
              height={25}
              width={25}
              style={{
                margin: '0 .5rem',
              }}
            />
          </Link>
        ))}
      </Box>
      {/* <FooterNav /> */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: { xs: 'column', sm: 'row' },
          paddingX: '1rem',
          alignItems: { xs: 'start', sm: 'center' },
        }}
      >
        <Box
          sx={{
            width: { xs: '50%', sm: '50%' },
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'column',
          }}
        >
          <Link
            href="https://www.youtube.com/playlist?list=PLkpOTpVlfWkkB1_7Mo-H5fhtEMhGPmaTn"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'pointer',
              marginTop: '.5rem',
              marginBottom: '.5rem',
            }}
          >
            <Box
              sx={{
                border: '1px solid #343132',
                borderRadius: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '143px',
              }}
            >
              <Typography
                fontSize="20px"
                fontWeight="400"
                lineHeight="32px"
                textAlign="center"
                textTransform={'capitalize'}
              >
                {t('footer_play')}
              </Typography>
              <Image
                src="/icons/play.png"
                alt={t('footer_learn')}
                title={`${t('footer_learn')}`}
                width={20}
                height={20}
              />
            </Box>
          </Link>

          <Box
            style={{
              textDecoration: 'none',
              color: 'inherit',
              cursor: 'pointer',
            }}
          >
            <Box
              sx={{
                border: '1px solid #343132',
                borderRadius: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '143px',
              }}
              onClick={openModel}
            >
              <Typography
                fontSize="20px"
                fontWeight="400"
                lineHeight="32px"
                textAlign="center"
                textTransform={'capitalize'}
              >
                {t('footer_learn')}
              </Typography>
              <Image
                src="/icons/i.svg"
                alt={t('footer_learn')}
                title={`${t('footer_learn')}`}
                width={20}
                height={20}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            width: { xs: '50%', sm: '50%' },
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'column',
          }}
        >
          {links.map((link) => (
            <Link
              key={t(link.title)}
              title={`${t(link.title)}`}
              href={link.link}
              style={{
                textDecoration: 'none',
              }}
            >
              <Box
                sx={{
                  height: '35px',
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
                  {t(link.title)}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
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
                // display: { xl: "none" },
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
            <Box component="div" sx={{ cursor: 'pointer', margin: '.5rem 0' }}>
              <Link href="/" title="Home View On Website Logo">
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
                      href={`${linkOne}`}
                      title={nameOne}
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        fontSize="32px"
                        fontWeight={400}
                        lineHeight="37px"
                        color="#343132"
                        textTransform={'capitalize'}
                      >
                        {nameOne}
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`${linkTwo}`}
                      title={nameTwo}
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        fontSize="32px"
                        fontWeight={400}
                        lineHeight="37px"
                        color="#343132"
                        textTransform={'capitalize'}
                      >
                        {nameTwo}
                      </Typography>
                    </Link>
                  </li>
                  {!token && (
                    <>
                      <li>
                        <Link
                          href={`${linkThree}`}
                          title={nameThree}
                          style={{ textDecoration: 'none' }}
                        >
                          <Typography
                            fontSize="32px"
                            fontWeight={400}
                            lineHeight="37px"
                            color="#343132"
                            textTransform={'capitalize'}
                          >
                            {nameThree}
                          </Typography>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={`${linkFour}`}
                          title={nameFour}
                          style={{ textDecoration: 'none' }}
                        >
                          <Typography
                            fontSize="32px"
                            fontWeight={400}
                            lineHeight="37px"
                            color="#343132"
                            textTransform={'capitalize'}
                          >
                            {nameFour}
                          </Typography>
                        </Link>
                      </li>
                    </>
                  )}

                  <li>
                    <Link
                      href={asPath}
                      locale={locale === 'en' ? 'ar' : 'en'}
                      title={`${locale === 'en' ? 'ar' : 'en'}`}
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
                  user?.hasKeywords ? (
                    <Link
                      href={`${locale}/dashboard/`}
                      style={{
                        textDecoration: 'none',
                      }}
                      title={`${t('nav_Dashboard')}`}
                    >
                      <Typography
                        sx={{
                          letterSpacing: '0.02em',
                          fontSize: { xs: '23px', lg: '32px' },
                          fontWeight: '700',
                          lineHeight: '40px',
                          color: '#343132',
                          textTransform: 'uppercase',
                        }}
                      >
                        {t('nav_Dashboard')}
                      </Typography>
                    </Link>
                  ) : (
                    <Typography
                      onClick={() => toast.info(`${t('purchase_keyword')}`)}
                      sx={{
                        letterSpacing: '0.02em',
                        fontSize: { xs: '23px', lg: '32px' },
                        fontWeight: '700',
                        lineHeight: '40px',
                        color: '#343132',
                        textTransform: 'uppercase',
                      }}
                    >
                      {t('nav_Dashboard')}
                    </Typography>
                  )
                ) : (
                  <Link
                    href="/illustration"
                    style={{
                      textDecoration: 'none',
                    }}
                    title={`${t('nav_getStarted')}`}
                  >
                    <Typography
                      sx={{
                        letterSpacing: '0.02em',
                        fontSize: { xs: '23px', xl: '32px' },
                        fontWeight: '700',
                        lineHeight: '40px',
                        color: '#343132',
                        textTransform: 'uppercase',
                      }}
                    >
                      {t('nav_getStarted')}
                    </Typography>
                  </Link>
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
          <ModalNav open={open} onClick={handleClose} close={handleClose} />
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  )
}

export default NavbarStatic
