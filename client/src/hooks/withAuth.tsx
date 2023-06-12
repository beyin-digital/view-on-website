// withAuth.tsx

import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from '../contexts/userContext'

const withAuth = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const { token } = useContext(UserContext)
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true) // New state variable

    useEffect(() => {
      setTimeout(() => {
        if (token === null) {
          router.push('/login')
        } else {
          setIsLoading(false)
          if (router.query.hashtag) {
            router.push(
              `${router.locale}/dashboard?hashtag=${router.query.hashtag}&page=${router.query.page}&limit=${router.query.limit}`
            )
            return
          }
        }
      }, 250)
    }, [token])

    if (isLoading) {
      return <div>Loading...</div>
    }

    return <WrappedComponent {...props} />
  }

  return Wrapper
}

export default withAuth
