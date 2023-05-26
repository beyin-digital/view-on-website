import { Box, Typography } from '@mui/material'

const TextViewOnWeb = ({ keywordFound }: { keywordFound?: string }) => {
  return (
    <>
      <Box
        sx={{
          height: {
            xs: '60px',
            sm: '70px',
            md: '140px',
            xl: '120px',
          },
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className="TextViewOnWebsite"
      >
        <Typography
          sx={{
            fontSize: {
              xs: '20px',
              sm: '24px',
              md: '40px',
              xl: '50px',
            },
          }}
          fontWeight="600"
          color="#0090EC"
        >
          ViewOnWebsite.com
        </Typography>
      </Box>
    </>
  )
}

export default TextViewOnWeb
