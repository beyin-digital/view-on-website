import React from 'react'
import dynamic from 'next/dynamic'
import { Box } from '@mui/material'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const Header = dynamic(() => import('@/components/Home/HeaderHome'), {
  ssr: false,
})

const HomeForm = dynamic(() => import('@/components/Home/HomeForm'), {
  ssr: false,
})
const TextViewOnWeb = dynamic(() => import('@/components/Home/TextViewOnWeb'), {
  ssr: false,
})
const Layout = dynamic(() => import('./Layout'), {
  ssr: false,
})

const HomeDetails = ({
  keywordFound,
  hashtag,
  setHashtag,
  onClick,
}: {
  keywordFound: boolean
  hashtag: string
  setHashtag: any
  onClick: any
}) => {
  const { t } = useTranslation('home')
  const { locale } = useRouter()

  return (
    <Layout onClick={onClick}>
      <Box
        sx={{
          width: { xs: '95%', sm: '80%', md: '75%', xl: '70%' },
          height: '100%',

          transform: 'skew(16deg, 0deg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'column',
          paddingY: '.8rem',
        }}
      >
        <Box
          sx={{
            height: { xs: '40%', md: '30%', xl: '30%' },
            width: '100%',
            marginY: { xs: '2rem', md: '0' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Header />
        </Box>
        <Box
          sx={{
            height: { xs: '40%', sm: '50%', md: '50%', xl: '70%' },
            width: { xs: '100%', md: '90%', xl: '100%' },
            // marginY: { xs: '2rem', md: '0' },
          }}
          className="boxBlueLayout"
        >
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: { xs: 'center', sm: 'center', md: 'center' },
              justifyContent: { xs: 'center', sm: 'center', md: 'center' },
              flexDirection: 'column',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              position: 'relative',
              backgroundImage: "url('/images/cut-out-parallelogram.webp')",
            }}
            className="parallelogra"
          >
            {locale === 'ar' ? (
              <Box
                sx={{
                  width: '70%',
                  height: { xs: '70%', sm: '60%', md: '75%', xl: '85%' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  paddingX: '1rem',
                  marginRight: { xs: '3rem', sm: '2rem', md: '3rem' },
                }}
                className="boxGreenLayout"
              >
                <Box
                  sx={{
                    width: '90%',
                    height: '90%',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    flexDirection: 'column',
                  }}
                  className="boxRedLayout"
                >
                  <HomeForm
                    hashtag={hashtag}
                    setHashtag={setHashtag}
                    keywordFound={keywordFound}
                  />
                  <TextViewOnWeb />
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  width: '70%',
                  height: { xs: '70%', sm: '60%', md: '75%', xl: '85%' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  paddingX: '1rem',
                  marginLeft: {
                    xs: '-3rem',
                    sm: '3rem',
                    md: '-3rem',
                    lg: '-16rem',
                    xl: '-3rem',
                  },
                }}
                className="boxGreenLayout"
              >
                <Box
                  sx={{
                    width: '90%',
                    height: '90%',

                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    flexDirection: 'column',
                  }}
                  className="boxRedLayout"
                >
                  <HomeForm
                    hashtag={hashtag}
                    setHashtag={setHashtag}
                    keywordFound={keywordFound}
                  />
                  <TextViewOnWeb />
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default HomeDetails
