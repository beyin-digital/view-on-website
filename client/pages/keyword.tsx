import { useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const HashtagPage = (): JSX.Element => {
  const router = useRouter()
  const { hashtag } = router.query

  useEffect(() => {
    if (hashtag) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/keywords?letters=${hashtag}`)
        .then((response) => {
          const { sublink } = response.data // Assuming the API response has a "link" property
          if (sublink) {
            window.location.href = sublink
          } else {
            router.push(`${router.locale}/subscribe?hashtag=${hashtag}`)
          }
        })
        .catch((error) => {
          router.push('/404')
        })
    }
  }, [hashtag])

  return <div>{/* Your page content */}</div>
}

export default HashtagPage
