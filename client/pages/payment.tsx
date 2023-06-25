import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Seo from '@/components/Seo'
import { useTranslation } from 'next-i18next'
import { GetServerSideProps, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Payment = ({ data }: any) => {
  const { t } = useTranslation('payment')

  const router = useRouter()

  useEffect(() => {
    router.push(
      `/${data?.locale}/dashboard?hashtag=${decodeURI(
        data?.hashtag as string
      )}&page=${data?.page}&limit=${data?.limit}`
    )
    return
  }, [router.query.hashtag])

  return <></>
}

export default Payment

export const getServerSideProps: GetServerSideProps = async ({
  query,
  locale,
}) => {
  return {
    props: {
      data: {
        hashtag: query.hashtag,
        page: query.page,
        limit: query.limit,
        locale: locale || '',
      },
      ...(await serverSideTranslations(locale || '', ['common'])),
    },
  }
}