import { Box, Typography, Modal } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import { AiFillCloseCircle } from 'react-icons/ai'

const Header = () => {
  const { t } = useTranslation('home')
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
  return (
    <>
      <Box
        sx={{
          width: { xs: '100%', md: '90%', xl: '90%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            width: { xs: '85%', sm: '80%', md: '100%', xl: '90%' },
            px: { xs: '.5rem', sm: '1.5rem', md: '0rem', xl: '1.5rem' },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: '36px',
                sm: '36px',
                md: '50px',
                xl: '64px',
              },
            }}
            lineHeight="40px"
            letterSpacing="0.02em"
            fontWeight="500"
            className="Textredirected"
          >
            {t('title')}
          </Typography>
          <Typography
            sx={{
              margin: '1rem auto',
              fontSize: { xs: '20px', md: '30px', xl: '40px' },
              lineHeight: '92.5%',
              fontWeight: '400',
              height: '44px',
            }}
          >
            {t('header_text_one')}
            <Typography
              component={'span'}
              sx={{
                fontSize: { xs: '20px', md: '30px', xl: '40px' },
                borderRadius: '7px',
                background: 'linear-gradient(270deg, #0090EC 0%, #31E716 100%)',
                height: '44px',
                marginX: '.3rem',
                paddingY: '-.1rem',
              }}
            >
              {t('header_text_two')}
            </Typography>

            {t('header_text_three')}
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: '50px', md: '90px' },
            marginX: { xs: '.4rem', sm: '1rem', md: '1rem', xl: '1rem' },
            cursor: 'pointer',
          }}
          className="ImagePlay"
          onClick={openModel}
        >
          <img
            src="/icons/play.png"
            alt="View On Website Play Icon"
            title="View On Website Play Icon"
            style={{
              width: '100%',
            }}
          />
        </Box>
        <>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className="swiper-blu"
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  width: { xs: '100%', md: '800px', xl: '900px' },
                  height: { xs: '400px', md: '600px', xl: '600px' },
                  bgcolor: 'transparent',
                  paddingX: '1rem',
                  position: 'absolute' as 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=ryUxrFUk6MY"
                  width="100%"
                  height="100%"
                  playing={true}
                />
                <Box
                  sx={{
                    cursor: 'pointer',
                    top: '-1.5rem',
                    right: '0',
                    zIndex: '9999999',
                    position: 'absolute',
                  }}
                  onClick={closeModel}
                >
                  <AiFillCloseCircle
                    onClick={closeModel}
                    size={30}
                    color="#FBFBFB"
                  />
                </Box>
              </Box>
            </Box>
          </Modal>
        </>
      </Box>
    </>
  )
}

export default Header
