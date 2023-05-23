import { useState } from 'react'
import { Box, OutlinedInput } from '@mui/material'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const HomeForm = ({ handleSubmit, setHashtag, hashtag }: any) => {
  const { t } = useTranslation('home')

  const router = useRouter()

  const [isTyping, setIsTyping] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHashtag(e.target.value)
    setIsTyping(e.target.value.trim() !== '')
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: { xs: '70%', md: '100%', xl: '100%' },
          justifyContent: {
            xs: 'center',
            md: 'space-evenly',
            xl: 'space-around',
          },
          alignItems: 'baseline',
        }}
        className="BoxInputHom"
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginTop: { xs: '.1rem' },
          }}
          className="InputHomeMargin"
        >
          <Box
            sx={{
              width: {
                xs: '50px',
                md: '66px',
              },
              height: {
                xs: '50px',
                md: '66px',
              },
            }}
          >
            <img
              src="/icons/hashtag.svg"
              alt="View On Website Hashtag Icon"
              title="View On Website Hashtag Icon"
              style={{
                width: '100%',
                height: '100%',
              }}
              loading="lazy"
            />
          </Box>
          <form onSubmit={handleSubmit} className="cursor">
            <OutlinedInput
              value={hashtag}
              inputProps={{
                autoComplete: 'off',
                spellCheck: false,
              }}
              onChange={handleInputChange}
              sx={{
                width: '100%',
                height: { xs: '45px', md: '65px' },
                fontSize: {
                  xs: '18px',
                  sm: '22px',
                  md: '28px',
                  xl: '38px',
                },
                lineHeight: '28px',
                marginY: '.5rem',
                '.MuiOutlinedInput-notchedOutline': {
                  border: '0',
                  padding: '9px',
                },
                '&:hover > .MuiOutlinedInput-notchedOutline': {
                  border: '0',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderWidth: '2px',
                    transition: 'border-width 0.5s',
                  },
                  '&:hover fieldset': {
                    borderWidth: '2px',
                  },
                  '&.Mui-focused fieldset': {
                    borderWidth: '2px',
                  },
                },
                '& .MuiInputBase-input': {
                  caretColor: '#000',
                },
              }}
              placeholder={`${t('keyword')}`}
              className="cursorAnimation"
            />
            {/* <Box className="i" /> */}
            <Box className={`i ${isTyping ? 'stopAnimation' : ''}`} />
          </form>
        </Box>
        <Box
          onClick={() => router.push(`/subscribe/${hashtag}`)}
          sx={{
            cursor: 'pointer',
            width: {
              xs: '40px',
              md: '49px',
              xl: '56px',
            },
            height: {
              xs: '40px',
              md: '49px',
              xl: '56px',
            },
          }}
        >
          <img
            src="/icons/arrowUpRight.svg"
            alt="View On Website Arrow Up Left Icon"
            title="View On Website Arrow Up Left Icon"
            style={{
              width: '100%',
              height: '100%',
            }}
            loading="lazy"
            className="left"
          />
          <img
            src="/icons/arrowUpLeft.svg"
            alt="View On Website Arrow Up Left Icon"
            title="View On Website Arrow Up Left Icon"
            style={{
              width: '100%',
              height: '100%',
            }}
            loading="lazy"
            className="right"
          />
        </Box>
      </Box>
    </>
  )
}

export default HomeForm
