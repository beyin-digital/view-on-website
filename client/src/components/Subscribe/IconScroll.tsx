import { Box, Typography } from '@mui/material'

const IconScroll = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: '9999999999999',
        }}
      >
        <>
          <Typography
            fontSize={'15px'}
            fontWeight={'400'}
            lineHeight={'18px'}
            color="#343132"
            marginBottom="15px"
          >
            Scroll down
          </Typography>
          <>
            <>
              <svg
                className="animated-svg EffectMouse"
                width="22"
                height="40"
                viewBox="0 0 22 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.201 30.3905H8.89441C5.02885 30.3905 1.86719 27.2289 1.86719 23.3641V8.51863C1.86719 4.65385 5.02963 1.49219 8.89441 1.49219H13.2002C17.0657 1.49219 20.2274 4.65385 20.2274 8.51863V23.3641C20.2274 27.2289 17.0657 30.3905 13.201 30.3905Z"
                  stroke="#343132"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.9817 13.011H11.1124V13.0126C11.9804 13.0126 12.6913 12.3017 12.6913 11.4337V6.73123C12.6913 5.86245 11.9804 5.15234 11.1124 5.15234H10.9817C10.1137 5.15234 9.40284 5.86245 9.40284 6.73045V11.4321C9.40387 11.8506 9.57055 12.2516 9.86642 12.5474C10.1623 12.8433 10.5633 13.01 10.9817 13.011Z"
                  fill="#343132"
                />
                <path
                  d="M15.146 34.6807L11.0891 38.7376M6.99951 34.6807L11.0564 38.7376M11.1124 13.011H10.9817C10.5633 13.01 10.1623 12.8433 9.86642 12.5474C9.57055 12.2516 9.40387 11.8506 9.40284 11.4321V6.73045C9.40284 5.86245 10.1137 5.15234 10.9817 5.15234H11.1124C11.9804 5.15234 12.6913 5.86245 12.6913 6.73123V11.4337C12.6913 12.3017 11.9804 13.0126 11.1124 13.0126V13.011Z"
                  stroke="#343132"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </>
          </>
        </>
      </Box>
    </>
  )
}

export default IconScroll
