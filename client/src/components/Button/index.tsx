import { Box, Button, Typography } from '@mui/material'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { FiArrowUpRight, FiArrowUpLeft } from 'react-icons/fi'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'

// in example page
export const LinkSubscribe = () => {
  const { t } = useTranslation(['example', 'common'])
  const { locale } = useRouter()
  const router = useRouter()
  const [hovered, setHovered] = useState(false)

  const handleHover = () => {
    setHovered(!hovered)
  }

  return (
    <Box
      sx={{
        width: {
          xs: '300px',
          sm: '320px',
          md: '320px',
          xl: '350px',
        },
        height: '60px',
        display: 'flex',
        justifyContent: 'end',
        background: '#31E716',
        borderRadius: '16px',
      }}
      className={`sizeButtonWatch icon-container  ${hovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <Link
        style={{
          paddingRight: '18px',
          paddingLeft: '18px',
          height: '59px',
          width: '380px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          textDecoration: 'none',
        }}
        title={`${t('button')}`}
        href="/subscribe"
        locale={router.locale}
        className=''
      >
        <Typography
          sx={{
            letterSpacing: '0.02em',
            fontSize: { xs: '20px', md: '25px', xl: '32px' },
            fontWeight: '700',
            lineHeight: '30px',
            color: '#343132',
            textTransform: 'uppercase',
          }}
        >
          {t('button')}
        </Typography>
        {locale === 'ar' ? (
          <AiOutlineArrowLeft
            size={40}
            color="#343132"
            className="icon-left_rtl"
          />
        ) : (
          <AiOutlineArrowRight
            size={40}
            color="#343132"
            className="icon-left"
          />
        )}
      </Link>
    </Box>
  )
}

export const IconsStyle = () => {
  const { locale } = useRouter()

  return (
    <>
      {locale === 'ar' ? (
        <FiArrowUpLeft size={42} color="#FBFBFB" className="rig" />
      ) : (
        <FiArrowUpRight size={42} color="#FBFBFB" className="le" />
      )}
    </>
  )
}
