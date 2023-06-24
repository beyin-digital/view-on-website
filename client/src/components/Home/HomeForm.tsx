import { useContext, useEffect, useState } from 'react'
import { Box, OutlinedInput, TextField } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { KeywordContext } from '@/contexts/keywordContext'
import { toast } from 'react-toastify'
import { isMobile } from 'react-device-detect'

import io from 'socket.io-client'

const socket = io(process.env.NEXT_PUBLIC_WEBSOCKET_URL as string)

const HomeForm = ({ setHashtag, hashtag }: any) => {
  const { t } = useTranslation('home')
  const notify = () => toast('Wow so easy!')
  const { foundKeyword, keywordFound, setFoundKeyword } =
    useContext(KeywordContext)

  const [isTyping, setIsTyping] = useState(false)
  const [isInputEmpty, setIsInputEmpty] = useState(true)
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [isInputValid, setIsInputValid] = useState(true)

  const allowedCharacters = /^[^. ]+$/
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value

    setHashtag(e.target.value.trim())
    setIsTyping(e.target.value.trim() !== '')
    setIsInputEmpty(inputValue.trim() === '')
    setIsInputValid(!/\d/.test(inputValue))
  }

  const handleInputFocus = () => {
    setIsInputFocused(true)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (foundKeyword) {
      const trimmedHashtag = hashtag.trim() // Remove extra spaces from the text
      if (trimmedHashtag !== '') {
        // Check for characters after removing spaces
        socket.emit('redirectionAdded', {
          keywordId: foundKeyword?.id,
        })

        isMobile
          ? (window.location.href = foundKeyword?.sublink)
          : (window.open(`${foundKeyword?.sublink}`, '_blank') as any)
        setHashtag('')
        setFoundKeyword(null)
      }
    }
  }

  useEffect(() => {
    if (foundKeyword) {
    }
  }, [foundKeyword])

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: { xs: '45%', sm: '80%', md: '80%', xl: '100%' },
          justifyContent: {
            xs: 'space-evenly',
            md: 'space-evenly',
            xl: 'space-around',
          },
          alignItems: 'baseline',
        }}
        className="BoxInputHome"
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginTop: { xs: '.1rem' },
          }}
          className="InputHomeMargi"
        >
          <Box
            sx={{
              width: {
                xs: '40px',
                md: '66px',
              },
              height: {
                xs: '40px',
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
              // disabled={!keywordFound}
              onFocus={handleInputFocus}
              inputProps={{
                autoComplete: 'off',
                spellCheck: false,
                maxLength: 13,
                pattern: allowedCharacters.test(hashtag),
              }}
              onChange={handleInputChange}
              sx={{
                width: '100%',
                height: { xs: '', md: '65px' },
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
                    // transition: "border-width 0.5s",
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
                  color: isInputFocused ? '#6BBF52' : '',
                  fontWeight: '800',
                },
                '& .MuiOutlinedInput-input': {
                  '&::placeholder': {
                    color: isInputFocused ? '#000' : '',
                    fontWeight: '400',
                  },
                },
              }}
              placeholder={`${t('keyword')}`}
              className="cursorAnimation"
            />
            <Box className={`i ${isTyping ? 'stopAnimation' : ''}`} />
          </form>
        </Box>
        <Box
          component="button"
          title="Button Arrow View On Website"
          type="submit"
          onClick={handleSubmit}
          disabled={!keywordFound}
          sx={{
            background: 'none',
            border: 'none',
            cursor: keywordFound && 'pointer',
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
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="left"
          >
            <path
              d="M32.4944 12.4305L3.35356 41.5713C1.98672 42.9381 1.98672 45.1542 3.35356 46.521L5.47897 48.6464C6.84581 50.0133 9.06188 50.0133 10.4287 48.6464L39.5695 19.5056C39.8845 19.1907 40.4231 19.4137 40.4231 19.8592L40.4231 43.4615C40.4231 45.3945 41.9901 46.9615 43.9231 46.9615L47 46.9615C48.933 46.9615 50.5 45.3945 50.5 43.4615L50.5 5C50.5 3.067 48.933 1.5 47 1.5L8.53847 1.5C6.60547 1.5 5.03847 3.067 5.03847 5L5.03847 8.07692C5.03847 10.0099 6.60547 11.5769 8.53846 11.5769L32.1408 11.5769C32.5863 11.5769 32.8093 12.1155 32.4944 12.4305Z"
              fill="#343132"
              style={{
                stroke:
                  keywordFound && !isInputEmpty ? 'rgb(43, 234, 15)' : 'none',
                strokeWidth: foundKeyword?.sublink && !isInputEmpty ? '2' : '0',
              }}
            />
          </svg>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="right"
          >
            <path
              d="M44.5858 42.4604C45.3668 41.6793 45.3668 40.413 44.5858 39.6319L15.445 10.4911C14.185 9.2312 15.0774 7.07692 16.8592 7.07692L40.4615 7.07692C41.5661 7.07692 42.4615 6.18149 42.4615 5.07692L42.4615 2C42.4615 0.89543 41.5661 -1.81691e-06 40.4615 -1.76863e-06L2 -8.74227e-08C0.89543 -3.91405e-08 3.91405e-08 0.895431 8.74228e-08 2L1.76863e-06 40.4615C1.81691e-06 41.5661 0.895432 42.4615 2 42.4615L5.07692 42.4615C6.18149 42.4615 7.07692 41.5661 7.07692 40.4615L7.07692 16.8592C7.07692 15.0774 9.23121 14.1851 10.4911 15.445L39.6319 44.5858C40.413 45.3668 41.6793 45.3668 42.4604 44.5858L44.5858 42.4604Z"
              fill="#343132"
              style={{
                stroke:
                  keywordFound && !isInputEmpty ? 'rgb(43, 234, 15)' : 'none',
                strokeWidth: keywordFound && !isInputEmpty ? '2' : '0',
              }}
            />
          </svg>
        </Box>
      </Box>
    </>
  )
}

export default HomeForm
