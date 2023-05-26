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
  keywordFound: boolean
  token?: string
  handleSubscription: (
    letters: string,
    sublink: string,
    interval?: string,
    price?: number
  ) => void
  getUsersKeywords: () => void
  getUserSubscriptions: () => void
  subscriptions: any[]
  keywords: any[]
  selectedKeyword: any
  setSelectedKeyword: React.Dispatch<React.SetStateAction<any>>
  setAnalyticsData: React.Dispatch<React.SetStateAction<any>>
  updateKeywordDetails: (id: number, values: any) => void
  analyticsData: {
    totalVisits: number
    totalVisitsToday: number
    totalDailyVisitsByHoursOfTheDay: any[]
    totalVisitsByMonthsOfTheYear: any[]
    totalVisitsByDaysOfTheWeek: any[]
    totalVisitsByDaysOfTheMonth: any[]
  }
  setLineChartDataType: React.Dispatch<
    React.SetStateAction<'day' | 'week' | 'month' | 'year'>
  >
  lineChartDataType: string
  isSearching: boolean
  checkPremiumKeyword: () => {}
  sortedKeywords: string[]
}>({
  values: '',
  setValues: () => {},
  checkKeywordavailability: async (keyword: string) => {},
  keywordFound: false,
  token: '',
  handleSubscription: async (
    letters: string,
    sublink: string,
    interval?: string,
    price?: number
  ) => {},
  getUsersKeywords: async () => {},
  getUserSubscriptions: async () => {},
  subscriptions: [],
  keywords: [],
  selectedKeyword: {},
  setSelectedKeyword: () => {},
  setAnalyticsData: () => {},
  updateKeywordDetails: async (id: number, values: any) => {},
  analyticsData: {
    totalVisits: 0,
    totalVisitsToday: 0,
    totalDailyVisitsByHoursOfTheDay: [],
    totalVisitsByMonthsOfTheYear: [],
    totalVisitsByDaysOfTheWeek: [],
    totalVisitsByDaysOfTheMonth: [],
  },
  setLineChartDataType: () => {},
  lineChartDataType: '',
  isSearching: false,
  checkPremiumKeyword: async () => {},
  sortedKeywords: [],
})

export const KeywordProvider = ({ children }: any) => {
  const router = useRouter()
  const [values, setValues] = useState({
    hashtag: '',
    sublinks: '',
  })

  const [isSearching, setIsSearching] = useState(false)
  const [premiumKeywords, setPremiumKeywords] = useState<any>([])
  const [sortedKeywords, setSortedKeywords] = useState<string[]>([])
  const [keywordFound, setKeywordFound] = useState(false)
  const [keywords, setKeywords] = useState([])
  const [selectedKeyword, setSelectedKeyword] = useState<any>({})
  const [token, setToken] = useState('')
  const [subscriptions, setSubscriptions] = useState([])
  const [analyticsData, setAnalyticsData] = useState({
    totalVisits: 0,
    totalVisitsToday: 0,
    totalDailyVisitsByHoursOfTheDay: [],
    totalVisitsByMonthsOfTheYear: [],
    totalVisitsByDaysOfTheWeek: [],
    totalVisitsByDaysOfTheMonth: [],
  })
  const [lineChartDataType, setLineChartDataType] = useState<
    'day' | 'week' | 'month' | 'year'
  >('day')
  const checkKeywordavailability = async (keyword: string) => {
    // check if keyword is available
    setIsSearching(true)
    const res = await api.get(`/keywords?hashtag=${keyword}`)
    const data = res.data

    if (data) {
      setKeywordFound(true)
      setIsSearching(false)
      return
    }
    setKeywordFound(false)
    setIsSearching(false)
  }

  const handleSubscription = async (
    letters: string,
    sublink: string,
    interval?: string,
    price?: number
  ) => {
    if (token === '' || token === null) {
      router.push('/login')
      return
    }
    const res = await api.post(
      '/stripe/payment',
      { letters, sublink, interval, price },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    const data = res.data
    window.location.href = data.url
  }

  const getUsersKeywords = async () => {
    if (token !== '' && token !== null) {
      const res = await api.get('/keywords/all', {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = res.data
      setKeywords(data.data)

      setSelectedKeyword(data.data[0])
    }
  }

  const getUserSubscriptions = async () => {
    const res = await api.get('/subscriptions', {
      headers: { Authorization: `Bearer ${token}` },
    })
    const data = res.data.data
    if (data.length > 0) {
      setSubscriptions(data)
    }
  }

  const checkPremiumKeyword = async () => {
    const res = await api.get(`/keywords/check/premium`)
    const data = res.data

    if (data.length > 0) {
      setPremiumKeywords(data)
      const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')
      alphabets.map((letter, i) => {
        console.log(letter.localeCompare(premiumKeywords[i]?.letters) === 0)
      })
    }
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
  }, [keywordFound, lineChartDataType])
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
        updateKeywordDetails,
        analyticsData,
        lineChartDataType,
        setLineChartDataType,
        isSearching,
        checkPremiumKeyword,
        sortedKeywords,
        setAnalyticsData,
      }}
    >
      {children}
    </KeywordContext.Provider>
  )
}
