import { api } from '@/utils/api'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'

// create a context for the keyword
export const KeywordContext = createContext<{
  values: any
  setValues: React.Dispatch<React.SetStateAction<any>>
  checkKeywordavailability: (keyword: string) => void
  keywordFound?: boolean
  token?: string
  handleSubscription: (
    letters: string,
    sublink: string,
    price: number,
    interval: string
  ) => void
  getUserSubscriptions: () => void
  subscriptions: any[]
}>({
  values: '',
  setValues: () => {},
  checkKeywordavailability: async (keyword: string) => {},
  keywordFound: false,
  token: '',
  handleSubscription: async (
    letters: string,
    sublink: string,
    price: number,
    interval: string
  ) => {},
  getUserSubscriptions: async () => {},
  subscriptions: [],
})

export const KeywordProvider = ({ children }: any) => {
  const router = useRouter()
  const [values, setValues] = useState({
    hashtag: '',
    sublinks: '',
  })

  const [keywordFound, setKeywordFound] = useState(false)

  const [token, setToken] = useState('')
  const [subscriptions, setSubscriptions] = useState([])

  const checkKeywordavailability = async (keyword: string) => {
    // check if keyword is available
    const res = await api.get(`/keywords?hashtag=${keyword}`)
    const data = res.data

    if (data) {
      setKeywordFound(true)
      return
    }
    setKeywordFound(false)
    // if available, setKeyword
    // else, show error message
  }

  const handleSubscription = async (
    letters: string,
    sublink: string,
    price: number,
    interval: string
  ) => {
    if (token === '') {
      router.push('/login')
      return
    }
    const res = await api.post(
      '/stripe/payment',
      { letters, sublink, price, interval },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    const data = res.data
    window.location.href = data.url
  }

  const getUserSubscriptions = async () => {
    const res = await api.get('/subscriptions', {
      headers: { Authorization: `Bearer ${token}` },
    })
    const data = res.data.data
    if (data.length > 0) {
      console.log(data)
      setSubscriptions(data)
    }
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    setToken(token || '')
  }, [keywordFound, token])
  return (
    <KeywordContext.Provider
      value={{
        values,
        setValues,
        checkKeywordavailability,
        keywordFound,
        token,
        handleSubscription,
        getUserSubscriptions,
        subscriptions,
      }}
    >
      {children}
    </KeywordContext.Provider>
  )
}
