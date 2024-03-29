import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Button,
  Tab,
  Tabs,
  Typography,
  IconButton,
  tabsClasses,
} from '@mui/material'
import Image from 'next/image'
import { BiMenu } from 'react-icons/bi'
import { IoIosLogOut, IoMdClose } from 'react-icons/io'
import { MdHomeFilled } from 'react-icons/md'
import { FaUserAlt } from 'react-icons/fa'
import { AiFillCreditCard, AiFillInstagram } from 'react-icons/ai'
import { BsFacebook, BsFillShieldLockFill, BsYoutube } from 'react-icons/bs'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import Link from 'next/link'
import Modal from '../Modal'
import { UserContext } from '@/contexts/userContext'
import { useTranslation } from 'react-i18next'

import { KeywordContext } from '@/contexts/keywordContext'
import { Add } from '@mui/icons-material'

const Navbar = () => {
  const { t } = useTranslation('common')
  const { pathname } = useRouter()
  const { locale } = useRouter()

  const links = [
    {
      name: 'Home Page',
      tKey: 'side_home',
      icon: (
        <MdHomeFilled
          size={24}
          color={pathname === '/dashboard' ? '#FBFBFB' : ''}
        />
      ),
      href: '/dashboard',
    },
    {
      name: 'Profile',
      tKey: 'side_profile',
      icon: (
        <FaUserAlt
          color={pathname === '/dashboard/profile' ? '#FBFBFB' : ''}
          size={24}
        />
      ),
      href: '/dashboard/profile',
    },
    {
      name: 'Subscriptions',
      tKey: 'side_subscribe',
      icon: (
        <AiFillCreditCard
          color={pathname === '/dashboard/subscriptions' ? '#FBFBFB' : ''}
          size={24}
        />
      ),
      href: '/dashboard/subscriptions',
    },
    {
      name: 'Security',
      tKey: 'side_security',
      icon: (
        <BsFillShieldLockFill
          color={pathname === '/dashboard/security' ? '#FBFBFB' : ''}
          size={24}
        />
      ),
      href: '/dashboard/security',
    },
    {
      name: 'Logout',
      tKey: 'side_logout',
      icon: (
        <IoIosLogOut
          color={pathname === '/dashboard/logout' ? '#FBFBFB' : ''}
          size={24}
        />
      ),
      href: '/dashboard/logout',
    },
  ]

  const router = useRouter()
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false)

  const { logout, token, user } = useContext(UserContext)
  const { getUsersKeywords, keywords, selectedKeyword, setSelectedKeyword } =
    useContext(KeywordContext)

  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(1)
  const handleOpen = () => {
    setMobileNavOpen(false)
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    const selectedKeyword = keywords?.data?.find(
      (keyword: any) =>
        (decodeURI(encodeURI(keyword?.letters)) as any) === newValue
    ) as any
    setSelectedKeyword(selectedKeyword)
    if (router.query.hashtag) {
      router.replace(`/${router.locale}/dashboard`, undefined, {
        shallow: true,
      })
    }
  }

  useEffect(() => {
    if (token) {
      if (router.query.hashtag) {
        ;async () => {
          await getUsersKeywords(
            parseInt(router.query.page as string),
            parseInt(router.query.limit as string)
          )
        }
        router.replace(`/${router.locale}/dashboard`, undefined, {
          shallow: true,
        })
        return
      }
      getUsersKeywords(page)
    }
    return () => {
      setSelectedKeyword(null)
    }
  }, [token])
  return (
    <>
      {/* Desktop Navbar */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: '999999',
          width: '100%',
          height: { xs: '60px', md: '60px', xl: '80px' },
          display: { xs: 'none', md: 'flex', xl: 'flex' },
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginBottom: '26px',
          paddingX: '30px',
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: { xs: '100%', md: '70%', xl: '80%' },
            maxWidth: '1544px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            background: 'rgba(251, 251, 251, 0.5)',
            border: '1px solid #E3E3E3',
            backdropFilter: 'blur(100px)',
            borderRadius: '0px 0px 15px 15px',
          }}
        >
          <Typography
            fontSize={{ xs: '20px', md: '22px', xl: '32px' }}
            fontWeight={600}
            width="20%"
            paddingLeft="15px"
          >
            {t('title')}
          </Typography>
          {keywords?.hasNextPage && locale == 'ar' && (
            <IconButton
              size="small"
              sx={{}}
              onClick={() => {
                setPage(page + 1)
                getUsersKeywords(page + 1)
              }}
            >
              <Add />
            </IconButton>
          )}
          <Tabs
            sx={{
              height: '100%',
              width: '80%',
              color: '#0090EC',
              display: 'flex',
              alignItems: 'center',
            }}
            TabIndicatorProps={{
              sx: {
                background: '#0090EC',
                color: '#0090EC',
              },
            }}
            value={selectedKeyword?.letters}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            defaultValue={selectedKeyword?.letters}
            dir="ltr"
          >
            {keywords?.data?.map((keyword: any) => (
              <Tab
                sx={{
                  minWidth: '15%',
                  fontSize: {
                    xs: '16px',
                    md: '16px',
                    xl: '24px',
                  },
                  marginTop: {
                    xs: '10px',
                    md: '10px',
                    xl: '20px',
                  },
                  fontWeight: selectedKeyword?.id === keyword?.id ? 600 : 400,
                  color: 'black',
                }}
                value={keyword?.letters}
                key={keyword?.id}
                label={`#` + decodeURI(encodeURI(keyword?.letters))}
              />
            ))}
          </Tabs>
          {keywords?.hasNextPage && locale == 'en' && (
            <IconButton
              size="small"
              sx={{}}
              onClick={() => {
                setPage(page + 1)
                getUsersKeywords(page + 1)
              }}
            >
              <Add />
            </IconButton>
          )}
        </Box>
      </Box>
      {/* Mobile Header */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: '99999999999999999999',
          height: '94px',
          display: { xs: 'flex', md: 'none', xl: 'none' },
          alignItems: 'center',
          background: 'rgba(251, 251, 251, 0.6)',
          paddingX: '24px',
          border: '1px solid #FBFBFB',
          backdropFilter: 'blur(100px)',
        }}
      >
        <Box
          sx={{
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '37px',
          }}
        >
          {mobileNavOpen ? (
            <IoMdClose
              size={33}
              onClick={() => {
                setMobileNavOpen(!mobileNavOpen)
              }}
              style={{
                cursor: 'pointer',
              }}
            />
          ) : (
            <BiMenu
              size={33}
              onClick={() => {
                setMobileNavOpen(!mobileNavOpen)
              }}
              style={{
                cursor: 'pointer',
              }}
            />
          )}
          <Typography fontSize="24px" fontWeight="600">
            {t('side_title')}
          </Typography>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={74}
              height={37}
              style={{
                cursor: 'pointer',
              }}
            />
          </Link>
        </Box>
      </Box>
      {/* Menu List */}
      {mobileNavOpen && (
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            zIndex: '9991',
            flexDirection: 'column',
            background: 'rgba(251, 251, 251, 0.6)',
            backdropFilter: 'blur(100px)',
            width: '100%',
            alignItems: 'center',
            height: '930px',
            top: '94px',
          }}
        >
          {links.map((link) => (
            <Box
              key={link.name}
              onClick={() => {
                if (link.name === 'Logout') {
                  handleOpen()
                  return
                }
                router.push(link.href)
                setMobileNavOpen(false)
              }}
              sx={{
                display: 'flex',
                cursor: 'pointer',
                width: '80%',
                height: '59px',
                borderRadius: '7px',
                background: pathname === link.href ? '#0090EC' : '',
                marginTop: '13px',
              }}
            >
              <Box
                sx={{
                  width: '20%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                {link.icon}
              </Box>
              <Box
                sx={{
                  width: '80%',
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                <Typography
                  fontSize="20px"
                  fontWeight={pathname === link.href ? 600 : 400}
                  color={pathname === link.href ? '#FBFBFB' : '#000'}
                >
                  {t(link.tKey)}
                </Typography>
              </Box>
            </Box>
          ))}
          <Box
            sx={{
              display: 'flex',
              marginTop: '125px',
              width: '50%',
              height: '24px',
              justifyContent: 'space-between',
            }}
          >
            <Link
              href="https://www.facebook.com/profile.php?id=100064864085130"
              target="_blank"
            >
              <BsFacebook size={17.5} color="#343132" />
            </Link>

            <Link href="https://instagram.com/viewonwebsite" target="_blank">
              <AiFillInstagram size={17.5} color="#343132" />
            </Link>
            <Link
              href="https://www.youtube.com/playlist?list=PLkpOTpVlfWkkB1_7Mo-H5fhtEMhGPmaTn"
              target="_blank"
            >
              <BsYoutube size={17.5} color="#343132" />
            </Link>
          </Box>
        </Box>
      )}
      <Modal
        title="Log Out"
        open={open}
        handleClose={handleClose}
        sx={{
          zIndex: '99999999999999',
          position: 'relative',
        }}
      >
        <Box>
          <Typography>{t('log_out')}</Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            bottom: 0,
            width: '90%',
            justifyContent: 'space-between',
            margin: '0 auto',
            paddingBottom: '21px',
          }}
        >
          <Button
            color="info"
            variant="contained"
            sx={{ height: '42px', width: '154px' }}
            onClick={() => {
              logout()
            }}
          >
            {t('side_logout')}
          </Button>
          <Button
            color="error"
            variant="contained"
            sx={{ height: '42px', width: '154px' }}
            onClick={() => {
              handleClose()
            }}
          >
            {t('cancel')}
          </Button>
        </Box>
      </Modal>
    </>
  )
}

export default Navbar
