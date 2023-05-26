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
        // container
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
              height: '220px',
              transform: 'skew(16deg, 0deg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* text header  */}
            <Header />
          </Box>
          <LayoutHomeBg>
            <Box
              sx={{
                width: { xs: '100%', sm: '70%', md: '70%', xl: '70%' },
                height: {
                  xs: '100%',
                  sm: '80%',
                  md: '60%',
                  xl: '300px',
                },
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: {
                  xs: 'end',
                  sm: 'center',
                  md: 'center',
                  xl: 'space-evenly',
                },
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
                  marginBottom: {
                    xs: '2.5rem',
                    sm: '1.5rem',
                    md: '4rem',
                    xl: '0',
                  },
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
