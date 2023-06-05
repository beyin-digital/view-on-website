// withAuth.js

import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from '../contexts/userContext'

const withAuth = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const { token, handleRefreshToken } = useContext(UserContext)
    const router = useRouter()

    useEffect(() => {
      if (!token) {
        // Redirects to the authentication page if the user is not authenticated
        router.push('/login')
      } else {
        const isTokenExpired = new Date().getTime() / 1000 > token.exp

        if (isTokenExpired) {
          handleRefreshToken() // Calling the function to get a new access token
        }
      }
    }, [token, handleRefreshToken, router])

    if (!token) {
      // Shows loading state while the user is not authenticated
      return <div>Loading...</div>
    }

    return <WrappedComponent {...props} />
  }

  return Wrapper
}

export default withAuth
