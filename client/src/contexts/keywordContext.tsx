import { api } from '@/utils/api'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import slugify from 'slugify'
// create a context for the keyword
export const KeywordContext = createContext<{
  values: any
  setValues: React.Dispatch<React.SetStateAction<any>>
  checkKeywordavailability: (keyword: string) => void
  keywordFound?: string
  token?: string
  handleSubscription: (
    letters: string,
    sublink: string,
    price: number,
    interval: string
  ) => void
  getUsersKeywords: () => void
  getUserSubscriptions: () => void
  subscriptions: any[]
  keywords: any[]
  selectedKeyword: any
  setSelectedKeyword: React.Dispatch<React.SetStateAction<any>>
  getKeywordAnalytics: () => void
  updateKeywordDetails: (id: number, values: any) => void
}>({
  values: '',
  setValues: () => {},
  checkKeywordavailability: async (keyword: string) => {},
  keywordFound: '',
  token: '',
  handleSubscription: async (
    letters: string,
    sublink: string,
    price: number,
    interval: string
  ) => {},
  getUsersKeywords: async () => {},
  getUserSubscriptions: async () => {},
  subscriptions: [],
  keywords: [],
  selectedKeyword: {},
  setSelectedKeyword: () => {},
  getKeywordAnalytics: async () => {},
  updateKeywordDetails: async (id: number, values: any) => {},
})

export const KeywordProvider = ({ children }: any) => {
  const router = useRouter()
  const [values, setValues] = useState({
    hashtag: '',
    sublinks: '',
  })

  const [keywordFound, setKeywordFound] = useState('')
  const [keywords, setKeywords] = useState([])
  const [selectedKeyword, setSelectedKeyword] = useState<any>({})
  const [token, setToken] = useState('')
  const [subscriptions, setSubscriptions] = useState([])

  const checkKeywordavailability = async (keyword: string) => {
    // check if keyword is available
    const res = await api.get(`/keywords?hashtag=${keyword}`)
    const data = res.data

    if (data) {
      setKeywordFound(data.sublink)
      return
    }
    setKeywordFound('ViewOnWebsite.com')
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

  const getUsersKeywords = async () => {
    const res = await api.get('/keywords/all', {
      headers: { Authorization: `Bearer ${token}` },
    })
    const data = res.data
    setKeywords(data.data)

    setSelectedKeyword(data.data[0])
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

  const getKeywordAnalytics = async () => {
    const res = await api.get(
      `/analytics?keyword=${slugify(selectedKeyword?.letters, {
        lower: true,
      })}`,

      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    const data = res.data
    console.log(data)
  }

  const updateKeywordDetails = async (id: number, values: any) => {
    try {
      const res = await api.put(
        `/keywords/${id}`,
        { ...values },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (res.status >= 400) {
        throw new Error()
      }

      toast.success('Keyword updated successfully')
      getUsersKeywords()
    } catch (error) {
      toast.error('Error updating keyword')
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
        getUsersKeywords,
        getUserSubscriptions,
        subscriptions,
        keywords,
        selectedKeyword,
        setSelectedKeyword,
        getKeywordAnalytics,
        updateKeywordDetails,
      }}
    >
      {children}
    </KeywordContext.Provider>
  )
}
