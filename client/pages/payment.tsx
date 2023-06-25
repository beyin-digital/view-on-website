import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Seo from '@/components/Seo'
import { useTranslation } from 'next-i18next'

const Payment = () => {
  const { t } = useTranslation('payment')

  const router = useRouter()

  useEffect(() => {
    if (router.query.hashtag) {
      router.push(
        `/${router.locale}/dashboard?hashtag=${decodeURI(
          router.query.hashtag as string
        )}&page=${router.query.page}&limit=${router.query.limit}`
      )
      return
    } else {
      router.push('/subscribe')
    }
  }, [router.query.hashtag])

  return <></>
}

export default Payment

// http://localhost:3000/payment?hashtag=p&page=1&limit=18
