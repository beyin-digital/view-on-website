import { Box, Button, OutlinedInput, Typography } from '@mui/material'
import LoginTextSignUp from '../Login/LoginTextSignUp'
import { useTranslation } from 'next-i18next'
import { IconsStyle } from '../Button'
import { useContext, useState } from 'react'
import { UserContext } from '@/contexts/userContext'
import { useRouter } from 'next/router'
import { FiArrowUpLeft, FiArrowUpRight } from 'react-icons/fi'

const FormRequest = () => {
  const { t } = useTranslation('request')
  const [identifier, setIdentifier] = useState('')
  const { locale } = useRouter()

  const { forgotPassword } = useContext(UserContext)
  // animation
  const [hoveredButton, setHoveredButton] = useState(false)
  const handleHoverButton = () => {
    setHoveredButton(!hoveredButton)
  }

  const handleLeave = () => {
    setHoveredButton(false)
  }

  return (
    <>
      <Box
        sx={{
          width: { xs: '100%', sm: '100%', md: '565px', xl: '565px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingX: { xs: '', sm: '3rem' },
        }}
      >
        <OutlinedInput
          value={identifier}
          sx={{
            width: '100%',
            height: { xs: '45px', md: '50px', xl: '65px' },
            fontSize: '24px',
            lineHeight: '28px',
            background: '#FBFBFB',
            border: '0.897277px solid #E3E3E3',
            borderRadius: '10px',
            marginY: '.5rem',
            boxShadow: ' 0px 27.8156px 45.7611px rgba(0, 0, 0, 0.03)',
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
          placeholder={`${t('input')}`}
          onChange={(e) => setIdentifier(e.target.value)}
        />
      </Box>
      <Box
        sx={{
          marginY: '4rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: { xs: '240px', sm: '300px', md: '300px', xl: '300px' },
            display: 'flex',
            justifyContent: 'end',
            background: '#0090EC',
            borderRadius: '16px',
          }}
          className="ButtonPayCard"
          onMouseEnter={handleHoverButton}
          onMouseLeave={handleLeave}
        >
          <Button
            onClick={() => {
              identifier && forgotPassword(identifier)
            }}
            sx={{
              paddingX: '18px',
              height: '59px',
              width: { xs: '220px', md: '231px', xl: '231px' },
              display: 'flex',
              justifyContent: 'space-around',
            }}
            type="submit"
          >
            <Typography
              sx={{
                letterSpacing: '0.02em',
                fontSize: { xs: '20px', md: '25px', xl: '32px' },
                fontWeight: 400,
                lineHeight: '40px',
                color: '#FBFBFB',
                textTransform: 'uppercase',
              }}
            >
              {t('send')}
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
            {/* <IconsStyle /> */}
          </Button>
        </Box>
        <LoginTextSignUp />
      </Box>
    </>
  )
}

export default FormRequest
