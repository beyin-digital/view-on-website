import { Grid, Box } from '@mui/material'

// components
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/Home/HeaderHome'), {
  ssr: false,
})
const TextViewOnWeb = dynamic(() => import('@/components/Home/TextViewOnWeb'), {
  ssr: false,
})
const LayoutHomeBg = dynamic(() => import('@/components/Home/LayoutHomeBg'), {
  ssr: false,
})
const HomeForm = dynamic(() => import('./HomeForm'), {
  ssr: false,
})

const HomeDetails = ({
  keywordFound,
  hashtag,
  setHashtag,
}: {
  keywordFound: boolean
  hashtag: string
  setHashtag: any
}) => {
  return (
    <>
      <Grid
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: { xs: 'center', sm: 'end', md: 'end', xl: 'end' },
        }}
      >
        <Box
          sx={{
            width: '80%',
            margin: '.4rem',
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: { xs: 'auto', sm: '220px' },
              transform: 'skew(16deg, 0deg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: { xs: '10px', sm: '1rem', md: '2rem' },
            }}
          >
            {/* text header  */}
            <Header />
          </Box>
          <LayoutHomeBg>
            <Box
              sx={{
                width: { xs: '100%', sm: '100%', md: '80%', xl: '70%' },
                height: {
                  xs: '145px',
                  sm: '179px',
                  md: '200px',
                  xl: '300px',
                },
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                position: 'absolute',
                top: { xs: '1.5rem', md: '3rem' },
                bottom: '0',
              }}
              className="boxHomeBlack"
            >
              <HomeForm
                hashtag={hashtag}
                setHashtag={setHashtag}
                keywordFound={keywordFound}
              />
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="BoxTextHom"
              >
                <TextViewOnWeb />
              </Box>
            </Box>
          </LayoutHomeBg>
        </Box>
      </Grid>
    </>
  )
}

export default HomeDetails
