import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { ImageBackground } from './ImageBackground'

import { useRouter } from 'next/router'
import { useState } from 'react'

import dynamic from 'next/dynamic'

const ModalFooter = dynamic(() => import('./ModalFooter'), {
  ssr: false,
})
const TextViewOnWeb = dynamic(() => import('../Home/TextViewOnWeb'), {
  ssr: false,
})

const FooterMobile = () => {
  const { t } = useTranslation('common')
  const { locale } = useRouter()
  const router = useRouter()

  // modal
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  function closeModel() {
    setOpen(false)
    // console.log("hi");
  }
  function openModel() {
    setOpen(true)
    // console.log("hi");
  }

  const links = [
    { id: 11, name: 'contact', link: '/contact', tKey: 'footer_contact' },
    // { id: 22, name: "Learn More", link: "/example", tKey: "footer_learn" },
    {
      id: 33,
      name: 'Privacy Policy',
      link: '/privacy',
      tKey: 'footer_privacy',
    },
    { id: 44, name: 'T&C', link: '/terms', tKey: 'footer_terms' },
  ]
  const icons = [
    {
      id: 1,
      name: 'youtube',
      icon: '/icons/youtube.svg',
      link: 'https://instagram.com',
    },
    {
      id: 3,
      name: 'instagram',
      link: 'https://instagram.com',
      icon: '/icons/instagram.svg',
    },
    {
      id: 4,
      name: 'faceBook',
      link: 'https://facebook.com',
      icon: '/icons/facebook.svg',
    },
  ]
  return (
    <>
      <Box
        sx={{
          height: { xs: '70vh', sm: '60vh', md: '' },
          width: '100%',
          display: { xs: 'flex', sm: 'flex', md: 'none', xl: 'none' },
          alignItems: 'end',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          maxHeight: '70vh',
        }}
      >
        {/* footer background */}
        <ImageBackground />
        <Box
          sx={{
            width: '100%',
            display: { xs: 'flex', sm: 'flex', md: 'none', xl: 'none' },
            alignItems: 'end',
            justifyContent: 'center',
            position: 'relative',
            marginTop: { xs: '0', sm: '5rem' },
          }}
        >
          <Box
            sx={{
              width: '100%',
              border: '1px solid #E3E3E3',
              height: { xs: '100%', sm: '100%', md: '400px', xl: '30vh' },
              backdropFilter: 'blur(50px)',
              borderRadius: '15px 15px 0px 0px',
              background: 'rgba(251, 251, 251, 0.6)',
              display: 'flex',
              justifyContent: 'start',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: {
                  xs: 'column',
                  sm: 'row',
                  md: 'row',
                  xl: 'row',
                },
              }}
            >
              <Box
                sx={{
                  width: { xs: '90%', md: '50%', xl: '40%' },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '1rem',
                  }}
                >
                  <Image
                    src="/images/logo.svg"
                    alt="Logo View On Website "
                    title="Logo View On Website "
                    width={100}
                    height={50}
                  />
                  <Typography
                    sx={{
                      fontSize: { xs: '8px', xl: '10px' },
                      fontWeight: '600',
                      lineHeight: '12px',
                      // marginY: "1rem",
                    }}
                    color="#343132"
                  ></Typography>
                </Box>
                <TextViewOnWeb />

                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '16px',
                    marginY: '.5rem',
                  }}
                  color="#343132"
                >
                  Be distantly directed to what you see!
                </Typography>
                {/* box icons */}
                <Box
                  sx={{
                    width: { xs: '90%', md: '50%', xl: '40%' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '.5rem 0',
                  }}
                >
                  {icons.map((item) => (
                    <Link href={item.link} key={item.id}>
                      <Image
                        src={item.icon}
                        alt={item.name}
                        height={17}
                        width={17}
                        style={{
                          margin: '0 10px',
                        }}
                      />
                    </Link>
                  ))}
                </Box>
              </Box>
              <Typography
                sx={{
                  border: '1px solid #E3E3E3',
                  width: '100%',
                  marginY: '.5rem',
                  display: { xs: 'block', sm: 'none' },
                }}
              />

              <Box
                sx={{
                  width: { xs: '90%', sm: '30%', md: '50%', xl: '40%' },
                  height: { xs: '50%', sm: '200px', md: '100%', xl: '100%' },
                  display: 'flex',
                  alignItems: {
                    xs: 'start',
                    sm: 'start',
                    md: 'center',
                    xl: 'center',
                  },
                  justifyContent: 'space-around',
                  flexDirection: {
                    xs: 'column',
                    sm: 'column',
                    md: 'row',
                    xl: 'row',
                  },
                  paddingX: { xs: '1rem', sm: '0', md: '0', xl: '0' },
                }}
              >
                {links.map((item) => (
                  <Link
                    href={item.link}
                    title={`${t(item.tKey)}`}
                    key={item.id}
                    style={{
                      textDecoration: 'none',
                      color: '#343132',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: '14px', sm: '20px' },
                        fontWeight: '400',
                        lineHeight: '25px',
                        textAlign: 'center',
                        textTransform: 'capitalize',
                      }}
                    >
                      {t(item.tKey)}
                    </Typography>
                  </Link>
                ))}
                <>
                  <Typography
                    sx={{
                      fontSize: { xs: '14px', sm: '20px' },
                      fontWeight: '400',
                      lineHeight: '25px',
                      textAlign: 'center',
                      textTransform: 'capitalize',
                      cursor: 'pointer',
                    }}
                    onClick={openModel}
                  >
                    {t('footer_learn')}
                  </Typography>
                  <ModalFooter
                    open={open}
                    onClick={closeModel}
                    close={handleClose}
                  />
                </>
              </Box>
            </Box>
            <Typography
              sx={{
                border: '1px solid #E3E3E3',
                width: '100%',
                display: { xs: 'block', sm: 'none' },
              }}
            />
            <Box
              sx={{
                width: '100%',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: { xs: '10px', md: '13px' },
                  lineHeight: '15px',
                  fontWeight: '400',
                }}
              >
                All Rights Reserved View On Website Portal Co LLC 2023
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default FooterMobile
