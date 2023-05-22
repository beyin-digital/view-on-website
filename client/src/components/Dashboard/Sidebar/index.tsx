import Image from 'next/image'
import { useRouter } from 'next/router'
import { Box, Button, Divider, Typography } from '@mui/material'
import Link from 'next/link'
import { FaUserAlt } from 'react-icons/fa'
import { AiFillCreditCard, AiFillInstagram } from 'react-icons/ai'
import {
  BsFacebook,
  BsFillShieldLockFill,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs'
import { IoIosLogOut } from 'react-icons/io'
import { BiHome } from 'react-icons/bi'
import { useContext, useState } from 'react'
import Modal from '../Modal'
import { UserContext } from '@/contexts/userContext'
import { useTranslation } from 'react-i18next'

const Sidebar = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const { locale } = useRouter()

  const { logout } = useContext(UserContext)

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const links = [
    {
      name: 'Home Page',
      tKey: 'side_home',
      icon: (
        <BiHome
          size={24}
          color={router.pathname === '/dashboard' ? 'white' : ''}
        />
      ),
      href: '/dashboard',
    },
    {
      name: 'Profile',
      tKey: 'side_profile',
      icon: (
        <FaUserAlt
          color={router.pathname === '/dashboard/profile' ? 'white' : ''}
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
          color={router.pathname === '/dashboard/subscriptions' ? 'white' : ''}
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
          color={router.pathname === '/dashboard/security' ? 'white' : ''}
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
          color={router.pathname === '/dashboard/logout' ? 'white' : ''}
          size={24}
        />
      ),
      href: '/dashboard/logout',
    },
  ]
  return (
    <>
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'fixed',
          height: '821px',
          width: { xs: '100%', md: '260px', xl: '319px' },
          maxWidth: '100%',
          background: 'rgba(251, 251, 251, 0.9)',
          border: '1px solid #E3E3E3',
          backdropFilter: 'blur(100px)',
          // borderRadius: "0px 30px 30px 0px",
        }}
        className="SideBarDashboard"
      >
        {/* Logo and title section */}
        <Box
          sx={{
            height: { md: '100%', xl: '84px' },
            maxHeight: '100px',
            display: 'flex',
            marginBottom: '19px',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: '20px',
            flexDirection: { md: 'column', xl: 'row' },
          }}
        >
          <Image src="/images/logo.svg" width={74} height={50} alt="logo" />
          <Box
            style={{
              marginLeft: '20px',
              display: 'flex',
              flexDirection: 'column',
              height: '50px',
              alignItems: 'flex-start',
            }}
          >
            <Typography fontSize="32px">{t('side_title')}</Typography>
            <Link
              href="/"
              style={{
                textDecoration: 'none',
              }}
            >
              <Typography
                style={{
                  color: '#0090EC',
                  fontSize: 13,
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                ViewOnWebsite.com
              </Typography>
            </Link>
          </Box>
        </Box>

        <Divider />

        {/* Options */}
        <Box
          sx={{
            height: '300px',
            width: '302px',
            maxWidth: '100%',
            margin: '5px auto 55px auto',
          }}
        >
          {links.map((link, index) => (
            <Box
              key={index}
              onClick={() => {
                link.name === 'Logout'
                  ? handleOpen()
                  : router.push(`/${router.locale}/${link.href}`)
              }}
              sx={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60px',
                background: router.pathname === link.href ? '#0090EC' : '',
                borderRadius: '2px',
              }}
            >
              {link.icon}
              <Typography
                sx={{ width: '200px', marginLeft: '10px' }}
                fontSize="20px"
                fontWeight={500}
                color={router.pathname === link.href ? '#FBFBFB' : '#000'}
              >
                {t(link.tKey)}
              </Typography>
            </Box>
          ))}
        </Box>
        <Divider style={{ marginBottom: '33px' }} />

        <Link
          href="/contact"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          {locale === 'ar' ? (
            <Typography marginRight="56px" color="inherit">
              {t('side_contact')}
            </Typography>
          ) : (
            <Typography marginLeft="56px" color="inherit">
              {t('side_contact')}
            </Typography>
          )}
        </Link>

        <Divider style={{ marginTop: '170px' }} />
        {locale === 'ar' ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '27px',
              width: '158px',
              marginRight: '60px',
            }}
          >
            <Link href="https://instagram.com/vow" target="_blank">
              <BsFacebook size={20} color="#343132" />
            </Link>
            <Link href="https://instagram.com/vow" target="_blank">
              <BsTwitter size={20} color="#343132" />
            </Link>
            <Link href="https://instagram.com/vow" target="_blank">
              <AiFillInstagram size={20} color="#343132" />
            </Link>
            <Link href="https://instagram.com/vow" target="_blank">
              <BsLinkedin size={20} color="#343132" />
            </Link>
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '27px',
              width: '158px',
              marginLeft: '60px',
            }}
          >
            <Link href="https://instagram.com/vow" target="_blank">
              <BsFacebook size={20} color="#343132" />
            </Link>
            <Link href="https://instagram.com/vow" target="_blank">
              <BsTwitter size={20} color="#343132" />
            </Link>
            <Link href="https://instagram.com/vow" target="_blank">
              <AiFillInstagram size={20} color="#343132" />
            </Link>
            <Link href="https://instagram.com/vow" target="_blank">
              <BsLinkedin size={20} color="#343132" />
            </Link>
          </Box>
        )}
      </Box>
      <Modal title="Log Out" open={open} handleClose={handleClose}>
        <Box>
          <Typography>
            You're about to Log out of your View On Website Dashboard?
          </Typography>
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
            {/* Log out */}
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
            {t('Cancel')}
          </Button>
        </Box>
      </Modal>
    </>
  )
}

export default Sidebar
