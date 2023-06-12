import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Payment = () => {
  const router = useRouter()

  useEffect(() => {
    if (router.query.hashtag) {
      router.push(
        `/${router.locale}/dashboard?hashtag=${router.query.hashtag}&page=${router.query.page}&limit=${router.query.limit}`
      )
    }
  }, [])

  return <div></div>
}

export default Payment

// http://localhost:3000/payment?hashtag=p&page=1&limit=18
