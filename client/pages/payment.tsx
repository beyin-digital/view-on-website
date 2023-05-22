import Layout from '@/components/Layout/Layout'
import PaymentDetails from '@/components/PaymentDetails.tsx'

import { useRouter } from 'next/router'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'

import { useTranslation } from 'next-i18next'

const PaymentPage = () => {
  const { t } = useTranslation('payment')

  const router = useRouter()
  return (
    <>
      <Layout>
        {/* delete page */}
        {/* <PaymentDetails /> */}
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || '', ['common', 'payment'])),
    },
  }
}
export default PaymentPage
