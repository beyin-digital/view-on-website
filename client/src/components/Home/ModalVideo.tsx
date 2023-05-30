import { useState } from 'react'
import { Box, Modal } from '@mui/material'
import { AiFillCloseCircle } from 'react-icons/ai'

const ModalVideo = () => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  function closeModel() {
    setOpen(false)
  }
  function openModel() {
    setOpen(true)
  }
  return (
    <>
      <Box
        sx={{
          width: { xs: '60px', md: '90px' },
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
          loading="lazy"
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
              <iframe
                src="https://thedxi.com/video/home"
                width="100%"
                height="100%"
                style={{
                  border: '0',
                }}
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
    </>
  )
}

export default ModalVideo
