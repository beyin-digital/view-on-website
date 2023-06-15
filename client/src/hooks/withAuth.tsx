// withAuth.tsx

import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { UserContext } from '../contexts/userContext'
import { Box } from '@mui/material'

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
              `${router.locale}/dashboard?hashtag=${decodeURI(
                router.query.hashtag as string
              )}&page=${router.query.page}&limit=${router.query.limit}`
            )
            return
          }
        }
      }, 250)
    }, [token])

    if (isLoading) {
      return (
        <>
          <Box
            sx={{
              position: 'fixed',
              height: '100vh',
              width: '100%',
              maxWidth: '100%',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',

              background: "url('/images/swirl.webp')",
              backgroundPositionY: '-1000px',
              backgroundPositionX: '-500px',
              backgroundRepeat: 'no-repeat',
              margin: '0 auto',
            }}
          />
          <Box
            sx={{
              zIndex: 1,
              position: 'fixed',
              height: '100vh',
              width: '100%',
              background: 'rgba(221, 250, 255, 0.17)',
              backdropFilter: 'blur(38px)',
            }}
          />
        </>
      )
    }

    return <WrappedComponent {...props} />
  }

  return Wrapper
}

export default withAuth
