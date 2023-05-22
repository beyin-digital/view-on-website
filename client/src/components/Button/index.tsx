import { Box, Button, ButtonBaseProps, Typography } from '@mui/material'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { FiArrowUpRight, FiArrowUpLeft } from 'react-icons/fi'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'

export const ButtonStyle = () => {
  return (
    <>
      <Box
        sx={{
          width: '180px',
          display: 'flex',
          justifyContent: 'end',
          background: 'linear-gradient(270deg, #0090EC 0%, #31E716 100%)',
          borderRadius: '11px',
        }}
      >
        <Button
          sx={{
            paddingX: '18px',
            width: '140px',
            height: '45px',
            display: 'flex',
            justifyContent: 'space-around',
          }}
          title="payment"
        >
          <Typography
            sx={{
              letterSpacing: '0.02em',
              fontSize: '32px',
              fontWeight: 400,
              lineHeight: '40px',
              color: '#343132',
              textTransform: 'uppercase',
            }}
          >
            pay
          </Typography>

          <FiArrowUpRight size={42} color="#343132" />
        </Button>
      </Box>
    </>
  )
}
export const ButtonChange = ({ name, onClick }: any) => {
  return (
    <>
      <Box
        sx={{
          width: {
            xs: '100%',
            sm: '459px',
            md: '459px',
            xl: '459px',
          },
          display: 'flex',
          justifyContent: 'center',
          background: '#0090EC',
          borderRadius: '16px',
        }}
      >
        <Button
          sx={{
            paddingX: '1rem',
            height: '59px',
            width: { xs: '100%', md: '431px', xl: '431px' },
            display: 'flex',
            justifyContent: 'center',
          }}
          onClick={onClick}
          title={name}
        >
          <Typography
            sx={{
              letterSpacing: '0.02em',
              fontSize: '32px',
              fontWeight: 400,
              lineHeight: '40px',
              color: '#FBFBFB',
              textTransform: 'uppercase',
            }}
          >
            {name}
          </Typography>
        </Button>
      </Box>
    </>
  )
}

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
      className={`icon-container ${hovered ? 'hovered' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <Link
        style={{
          paddingRight: '18px',
          paddingLeft: '18px',
          height: '59px',
          width: '400px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          textDecoration: 'none',
        }}
        title={`${t('button')}`}
        href="/subscribe"
        locale={router.locale}
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
