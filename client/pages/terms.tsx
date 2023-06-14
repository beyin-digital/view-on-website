import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Seo from '@/components/Seo'


const Navbar = dynamic(() => import('@/components/Navbar/Navbar'), {
  ssr: false,
})
const Footer = dynamic(() => import('@/components/Footer/Footer'), {
  ssr: false,
})
const FooterMobile = dynamic(() => import('@/components/Footer/FooterMobile'), {
  ssr: false,
})
const TermsDetails = dynamic(() => import('@/components/TermsDetails'), {
  ssr: false,
})
const Terms = () => {
  const { t } = useTranslation('terms')

  return (
    <>
      {/* <Head>
        <title>{t('meta_title')} </title>
        <meta name="description" content={`${t('meta_description')}`} />
        <meta name="keyword" content={`${t('meta_keyword')}`} />
        <link
          rel="canonical"
          href="https://wiewonwebsite.com/en/illustration"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head> */}
      <Seo title={t('meta_title')} descLong={`${t('meta_desc')}`}  descShort={`${t('meta_descShort')}`}  keyboard={`${t('meta_keyword')}`} canonical="https://vow-client.vercel.app/subscribe" />

      {/* <Layout>
        <h1></h1>
      </Layout> */}
      <>
        <Navbar />
        <>
          <TermsDetails />
        </>
        <Footer />
        <FooterMobile />
      </>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', ['common', 'terms'])),
    },
  }
}
export default Terms
