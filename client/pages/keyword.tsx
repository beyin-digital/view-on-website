import { useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const HashtagPage = (): JSX.Element => {
  const router = useRouter()
  const { hashtag } = router.query

  useEffect(() => {
    if (hashtag) {
      axios
        .get(`http://localhost:4000/api/v1/keywords?letters=${hashtag}`)
        .then((response) => {
          const { link } = response.data // Assuming the API response has a "link" property
          if (link) {
            router.push(link)
          } else {
            // Handle case when no link is returned
          }
        })
        .catch((error) => {
          // Handle error case
        })
    }
  }, [hashtag])

  return <div>{/* Your page content */}</div>
}

export default HashtagPage
