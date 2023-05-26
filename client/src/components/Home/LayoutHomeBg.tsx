import { Box } from '@mui/material'
interface Props {
  children: React.ReactNode
}

const LayoutHomeBg: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '300px',
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'end',
          marginLeft: { xs: '2rem', sm: '1rem', md: '-2rem', xl: '-3rem' },
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', md: '100%', xl: '100%' },
            height:"100%"
          }}
          className="BoxHomeLayoutCenter"
        >
          <Box
            sx={{
              width: { xs: '100%', sm: '500px', md: '700px', xl: '920px' },
              height: {
                xs: '180px',
                sm: '300px',
                md: '400px',
                xl: '435px',
              },
              display: 'flex',
              alignItems: 'center',
              justifyContent: {
                xs: '',
                sm: '',
                md: 'center',
                xl: 'center',
              },
              flexDirection: 'column',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              position: 'relative',
              transform: 'skew(16deg, 0deg)',
              xl: 'skew(16deg, 0deg)',
              backgroundImage: "url('/images/cut-out-parallelogram.webp')",
            }}
            className="parallelogram"
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default LayoutHomeBg
