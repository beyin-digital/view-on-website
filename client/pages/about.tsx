// import Container from '@mui/material/Container'
// import Typography from '@mui/material/Typography'
// import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
// import Link from '@/components/Link'
// import ProTip from '@/components/ProTip'
// import Copyright from '@/components/Copyright'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@/components/Layout/Layout'), {
  ssr: false,
})
import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import Seo from '@/components/Seo'

const AboutPage = () => {
  const { t } = useTranslation('about')

  return (
    <>
      {/* <Head>
        <title>{t('meta_title')} </title>
        <meta name="description" content={`${t('meta_desc')}`} />
        <meta name="keyword" content={`${t('meta_keyword')}`} />
        <link
          rel="canonical"
          href="https://wiewonwebsite.com/en/illustration"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head> */}
      <Seo title={t('meta_title')} descLong={`${t('meta_desc')}`}  descShort={`${t('meta_descShort')}`}  keyboard={`${t('meta_keyword')}`} canonical="https://vow-client.vercel.app/subscribe" />

      <Layout>
        {/* <Container maxWidth="lg">
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Material UI - Next.js example in TypeScript
          </Typography>
          <Box maxWidth="sm">
            <Button variant="contained" component={Link} noLinkStyle href="/">
              Go to the home page
            </Button>
          </Box>
          <ProTip />
          <Copyright />
        </Box>
      </Container> */}
      </Layout>
    </>
  )
}

export default AboutPage
